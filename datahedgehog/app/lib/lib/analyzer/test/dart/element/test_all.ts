/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/dart/element/test_all.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./builder_test";
import * as lib4 from "./element_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        lib3.main();
        lib4.main();
    },{
        name : 'element'});
};
export class properties {
}
