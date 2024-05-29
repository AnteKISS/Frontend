import Campaign from './campaign'
import Act from './act'
import Area from './area'
import TileSet from './tileset'
import Tile from './tile'
import Transition from './transition'
import { TileType } from './tile'

interface TileJson {
  x: number
  y: number
  type: TileType
}

interface TileSetJson {
  tiles: TileJson[]
}

interface TransitionJson {
  name: string
  areaName: string
  targetX: number
  targetY: number
}

interface AreaJson {
  name: string
  tileset: TileSetJson
  transitions: TransitionJson[]
}

interface ActJson {
  name: string
  areas: AreaJson[]
}

interface CampaignJson {
  name: string
  acts: ActJson[]
}

export default class CampaignJsonHandler {
  json: CampaignJson;

  public static import(json: string): Campaign {
    const CAMPAIGN_JSON: CampaignJson = JSON.parse(json);
    const CAMPAIGN = new Campaign(CAMPAIGN_JSON.name);
    CAMPAIGN.acts = [];

    // Create campaign
    for (const ACT_JSON of CAMPAIGN_JSON.acts) {
      const ACT = new Act(ACT_JSON.name);
      ACT.areas = [];

      // Create campaign's acts
      for (const AREA_JSON of ACT_JSON.areas) {
        const AREA = new Area(AREA_JSON.name);
        const TILESET = new TileSet(0);

        // Create tilesets for acts' areas
        for (const TILE_JSON of AREA_JSON.tileset.tiles) {
          const TILE = new Tile(TILE_JSON.x, TILE_JSON.y, TILE_JSON.type);
          TILESET.addTile(TILE.x, TILE.y, TILE.type);
        }
        AREA.tileSet = TILESET;

        // Create transitions for acts' areas
        for (const TRANSITION_JSON of AREA_JSON.transitions) {
          const TRANSITION_TARGET_AREA = ACT.areas.find((area) => area.name === TRANSITION_JSON.areaName);
          if (TRANSITION_TARGET_AREA !== undefined) {
            const TRANSITION = new Transition(TRANSITION_JSON.name, TRANSITION_TARGET_AREA, TRANSITION_JSON.targetX, TRANSITION_JSON.targetY);
            ACT.transitions.set(TRANSITION.name, TRANSITION);
          }
        }
        ACT.addArea(AREA);
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
      };

      // Create JSON for each act's areas
      for (const AREA of ACT.areas) {
        const TILESET_JSON: TileSetJson = {
          tiles: [],
        };

        // Create JSON for each tiles for area's tileset
        for (const TILE of AREA.tileSet.tiles.values()) {
          const TILE_JSON: TileJson = {
            x: TILE.x,
            y: TILE.y,
            type: TILE.type,
          };
          TILESET_JSON.tiles.push(TILE_JSON);
        }

        const AREA_JSON: AreaJson = {
          name: AREA.name,
          tileset: TILESET_JSON,
          transitions: [],
        };

        // Create JSON for each transition in the area
        for (const TRANSITION of ACT.transitions.values()) {
          const TRANSITION_JSON: TransitionJson = {
            name: TRANSITION.name,
            areaName: TRANSITION.targetArea.name,
            targetX: TRANSITION.targetX,
            targetY: TRANSITION.targetY,
          };
          AREA_JSON.transitions.push(TRANSITION_JSON);
        }
        ACT_JSON.areas.push(AREA_JSON);
      }
      CAMPAIGN_JSON.acts.push(ACT_JSON);
    }

    return JSON.stringify(CAMPAIGN_JSON);
  }
}
