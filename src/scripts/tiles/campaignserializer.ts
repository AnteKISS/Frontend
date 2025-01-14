import Campaign from './campaign';
import Act from './act';
import Area from './area';
import Transition from './transition';
import { GameObjectRegistry } from './gameObjectRegistry';

interface TransitionJson {
  name: string,
  areaName: string,
  targetX: number,
  targetY: number,
}

interface AreaJson {
  name: string,
  gameObjects: Array<any>, // Format: ["Tile", 3, 4, "source", frame, transition]
}

interface ActJson {
  name: string,
  areas: AreaJson[],
  transitions: TransitionJson[],
}

interface CampaignJson {
  name: string,
  acts: ActJson[],
}

export default abstract class CampaignSerializer {
  public static import(json: string): Campaign {
    const CAMPAIGN_JSON: CampaignJson = JSON.parse(json);
    const CAMPAIGN = new Campaign(CAMPAIGN_JSON.name);

    CAMPAIGN.acts = [];

    // Create campaign
    for (const ACT_JSON of CAMPAIGN_JSON.acts) {
      const ACT = new Act(ACT_JSON.name);
      ACT.areas = [];

      // Create campaign's areas for each act
      for (const AREA_JSON of ACT_JSON.areas) {
        const AREA = new Area(AREA_JSON.name);
        ACT.addArea(AREA);
        for (const GAME_OBJECT_ARGS of AREA_JSON.gameObjects) {
          const ARGS: Array<any> = GAME_OBJECT_ARGS;
          const GameObjectClass = GameObjectRegistry[ARGS[0]];
          const newGameObject = new GameObjectClass(...ARGS.slice(1));
          AREA.addGameObject(newGameObject);
        }
      }

      // Create act's transitions
      for (const TRANSITION_JSON of ACT_JSON.transitions) {
        const TRANSITION_TARGET_AREA = ACT.areas.find((area) => area.name === TRANSITION_JSON.areaName);
        if (TRANSITION_TARGET_AREA !== undefined) {
          const TRANSITION = new Transition(TRANSITION_JSON.name, TRANSITION_TARGET_AREA, TRANSITION_JSON.targetX, TRANSITION_JSON.targetY);
          ACT.setTransition(TRANSITION.name, TRANSITION);
        }
      }

      CAMPAIGN.addAct(ACT);
    }

    return CAMPAIGN;
  }

  public static export(campaign: Campaign): string {
    const CAMPAIGN_JSON: CampaignJson = {
      name: campaign.name,
      acts: [],
    };

    // Create JSON for every act
    for (const ACT of campaign.acts) {
      const ACT_JSON: ActJson = {
        name: ACT.name,
        areas: [],
        transitions: [],
      };

      // Create JSON for each transition in the act
      for (const TRANSITION of ACT.getTransitions()) {
        const TRANSITION_JSON: TransitionJson = {
          name: TRANSITION.name,
          areaName: TRANSITION.targetArea.name,
          targetX: TRANSITION.targetX,
          targetY: TRANSITION.targetY,
        };
        ACT_JSON.transitions.push(TRANSITION_JSON);
      }

      // Create JSON for each act's areas
      for (const AREA of ACT.areas) {
        const AREA_JSON: AreaJson = {
          name: AREA.name,
          gameObjects: [],
        };

        for (const OBJECT of AREA.getGameObjects())
          AREA_JSON.gameObjects.push(OBJECT.getArgs());

        ACT_JSON.areas.push(AREA_JSON);
      }
      CAMPAIGN_JSON.acts.push(ACT_JSON);
    }

    return JSON.stringify(CAMPAIGN_JSON);
  }
}
