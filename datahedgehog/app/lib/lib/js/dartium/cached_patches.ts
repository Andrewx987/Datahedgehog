/** Library asset:datahedgehog_monitor/lib/lib/js/dartium/cached_patches.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export class properties {
    private static __$cached_patches;
    static get cached_patches() { 
        if (this.__$cached_patches===undefined) {
            this.__$cached_patches = new core.DartMap.literal([
                ["dart:html",new core.DartList.literal("dart:html","dart:html_js_interop_patch.dart","import 'dart:js' as js_library;
                ["dart:indexed_db",new core.DartList.literal("dart:indexed_db","dart:indexed_db_js_interop_patch.dart","import 'dart:js' as js_library;
                ["dart:web_gl",new core.DartList.literal("dart:web_gl","dart:web_gl_js_interop_patch.dart","import 'dart:js' as js_library;
                ["dart:web_sql",new core.DartList.literal("dart:web_sql","dart:web_sql_js_interop_patch.dart","import 'dart:js' as js_library;
                ["dart:svg",new core.DartList.literal("dart:svg","dart:svg_js_interop_patch.dart","import 'dart:js' as js_library;
                ["dart:web_audio",new core.DartList.literal("dart:web_audio","dart:web_audio_js_interop_patch.dart","import 'dart:js' as js_library;
        }
        return this.__$cached_patches;
    }
    static set cached_patches(__$value : any)  { 
        this.__$cached_patches = __$value;
    }

}