import {InsertOperation} from "./InsertOperation";
import {RelationMetadata} from "../../metadata/RelationMetadata";

/**
 * @internal
 */
export class UpdateByRelationOperation {
    constructor(public targetEntity: any,
                public insertOperation: InsertOperation,
                public updatedRelation: RelationMetadata) {
    }
}