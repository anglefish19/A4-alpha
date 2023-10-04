import DocCollection, { BaseDoc } from "../framework/doc";

export interface TierDoc extends BaseDoc {
  name: String;
  priority: Number;
}

export default class TierConcept {
  public readonly tiers = new DocCollection<TierDoc>("tiers");
}
