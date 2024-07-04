import Campaign from './campaign'
import Act from './act'
import Area from './area'
import TileSet from './tileset'
import Transition from './transition'
import { TileType } from './tile'

interface TileJson {
  x: number,
  y: number,
  type: TileType,
  bitmap: string,
  frame: number,
  transitionName: string,
}

interface TileSetJson {
  tiles: TileJson[],
}

interface TransitionJson {
  name: string,
  areaName: string,
  targetX: number,
  targetY: number,
}

interface AreaJson {
  name: string,
  tileset: TileSetJson,
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
      for (const AREA_JSON of ACT_JSON.areas)
        ACT.addArea(new Area(AREA_JSON.name));

      // Create act's transitions
      for (const TRANSITION_JSON of ACT_JSON.transitions) {
        const TRANSITION_TARGET_AREA = ACT.areas.find((area) => area.name === TRANSITION_JSON.areaName);
        if (TRANSITION_TARGET_AREA !== undefined) {
          const TRANSITION = new Transition(TRANSITION_JSON.name, TRANSITION_TARGET_AREA, TRANSITION_JSON.targetX, TRANSITION_JSON.targetY);
          ACT.setTransition(TRANSITION.name, TRANSITION);
        }
      }

      // Create tileset for each area
      for (let i = 0; i < ACT.areas.length; i++) {
        const TILESET = new TileSet(0);
        for (const TILE_JSON of ACT_JSON.areas[i].tileset.tiles)
          TILESET.addTile(TILE_JSON.x, TILE_JSON.y, TILE_JSON.type, TILE_JSON.bitmap, TILE_JSON.frame, ACT.getTransition(TILE_JSON.transitionName));
        ACT.areas[i].tileSet = TILESET;
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
        const TILESET_JSON: TileSetJson = {
          tiles: [],
        };

        const AREA_JSON: AreaJson = {
          name: AREA.name,
          tileset: TILESET_JSON,
        };

        // Create JSON for each tiles for area's tileset
        for (const TILE of AREA.tileSet.getTiles()) {
          const TILE_JSON: TileJson = {
            x: TILE.x,
            y: TILE.y,
            type: TILE.type,
            bitmap: TILE.bitmap,
            frame: TILE.frame,
            transitionName: (TILE.transition !== undefined) ? TILE.transition.name : "",
          };
          TILESET_JSON.tiles.push(TILE_JSON);
        }

        ACT_JSON.areas.push(AREA_JSON);
      }
      CAMPAIGN_JSON.acts.push(ACT_JSON);
    }

    return JSON.stringify(CAMPAIGN_JSON);
  }
}
