/**
 * Created by eason on 16-9-22.
 */
import PIXI = require('pixi.js');
import {EventService,EventCode} from "../../../event/index";

export abstract class Stage {
    protected stage : PIXI.Container = new PIXI.Container();

    abstract onCreate(eventService:EventService);

    abstract onLooper();

    abstract onSwitch(msg:any,fn:()=>void);

    abstract afterSwitch();

    abstract onDestory();

    toModel():PIXI.Container {
        return this.stage;
    };
}