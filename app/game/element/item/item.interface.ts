import {ItemModel} from "./item.model";
/**
 * Created by septemberhx on 16-12-5.
 */

export class Item {
    protected model: ItemModel;

    constructor(x: number, y: number, r: number) {
        this.model = new ItemModel(x, y, r);

    }

}