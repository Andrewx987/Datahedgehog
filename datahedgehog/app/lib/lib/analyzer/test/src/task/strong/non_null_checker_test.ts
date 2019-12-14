/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/strong/non_null_checker_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./strong_test_helper";

export var main : () => void = () : void =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(NonNullCheckerTest);
        defineReflectiveTests(NonNullCheckerTest_Driver);
    });
};
export var _withError : (file : string,error : string) => string = (file : string,error : string) : string =>  {
    return new core.DartString(("" + file)).replaceFirst("boom",error);
};
export namespace NonNullCheckerTest {
    export type Constructors = lib3.AbstractStrongTest.Constructors | 'NonNullCheckerTest';
    export type Interface = Omit<NonNullCheckerTest, Constructors>;
}
@DartClass
export class NonNullCheckerTest extends lib3.AbstractStrongTest {
    defaultNnbdExample : string;

    defaultNnbdExampleMod1 : string;

    defaultNnbdExampleMod2 : string;

    test_assign_null_to_nonnullable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('int x = 0;
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_compoundAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('void main() {
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_forEach() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('void main() {
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_forLoop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('class MyList {
        } )());
    }

    test_generics() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('class Foo<T> {
            this.addFile('class Foo<T> {
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_initialize_nonnullable_with_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('int x = /*error:INVALID_ASSIGNMENT*/null;');
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_initialize_nonnullable_with_valid_value() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('int x = 0;');
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_map() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('class Pair<K, V> {
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_method_call() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('int s(int x) {
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_nonnullable_fields() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile(this.defaultNnbdExample);
            this.addFile(_withError(this.defaultNnbdExampleMod1,"error:INVALID_ASSIGNMENT"));
            this.addFile(_withError(this.defaultNnbdExampleMod2,"error:INVALID_ASSIGNMENT"));
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_nullable_fields() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile(this.defaultNnbdExample);
            this.addFile(this.defaultNnbdExampleMod1);
            this.addFile(this.defaultNnbdExampleMod2);
            await this.check();
        } )());
    }

    test_nullableTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFile('int x = null;');
        } )());
    }

    test_prefer_final_to_non_nullable_error() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('main() { final int /*error:FINAL_NOT_INITIALIZED*/x; }');
            this.addFile('final int /*error:FINAL_NOT_INITIALIZED*/x;');
            this.addFile('void foo() {}
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_uninitialized_nonnullable_field_declaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('void foo() {}
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_uninitialized_nonnullable_local_variable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('main() { int /*error:NON_NULLABLE_FIELD_NOT_INITIALIZED*/x; }');
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    test_uninitialized_nonnullable_top_level_variable_declaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('int /*error:NON_NULLABLE_FIELD_NOT_INITIALIZED*/x;');
            await this.check({
                nonnullableTypes : new core.DartList.literal<string>('dart:core,int')});
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NonNullCheckerTest() {
        this.defaultNnbdExample = 'class Point {
        this.defaultNnbdExampleMod1 = 'class Point {
        this.defaultNnbdExampleMod2 = 'class Point {
    }
}

export namespace NonNullCheckerTest_Driver {
    export type Constructors = NonNullCheckerTest.Constructors | 'NonNullCheckerTest_Driver';
    export type Interface = Omit<NonNullCheckerTest_Driver, Constructors>;
}
@DartClass
export class NonNullCheckerTest_Driver extends NonNullCheckerTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return true;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NonNullCheckerTest_Driver() {
    }
}

export class properties {
}