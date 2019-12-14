/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/convert_method_to_getter_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_refactoring";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ConvertMethodToGetterTest);
    });
};
export namespace ConvertMethodToGetterTest {
    export type Constructors = lib3.RefactoringTest.Constructors | 'ConvertMethodToGetterTest';
    export type Interface = Omit<ConvertMethodToGetterTest, Constructors>;
}
@DartClass
export class ConvertMethodToGetterTest extends lib3.RefactoringTest {
    refactoring : any;

    test_change_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('int test() => 42;
            this._createRefactoring('test');
            return this._assertSuccessfulRefactoring('int get test => 42;
        } )());
    }

    test_change_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringForString('test() => 2');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_change_multipleFiles() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexUnit('/other.dart','class A {
            await this.indexTestUnit('import \'other.dart\';
            this._createRefactoringForString('test() => 2');
            return this._assertSuccessfulRefactoring('import \'other.dart\';
        } )());
    }

    test_checkInitialConditions_alreadyGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('int get test => 42;
            let element : any = this.findElement('test',ElementKind.GETTER);
            this._createRefactoringForElement(element);
            this._assertInitialConditions_fatal('Only class methods or top-level functions can be converted to getters.');
        } )());
    }

    test_checkInitialConditions_hasParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('int test(x) => x * 2;
            this._createRefactoring('test');
            this._assertInitialConditions_fatal('Only methods without parameters can be converted to getters.');
        } )());
    }

    test_checkInitialConditions_localFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test');
            this._assertInitialConditions_fatal('Only top-level functions can be converted to getters.');
        } )());
    }

    test_checkInitialConditions_notFunctionOrMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('test');
            this._assertInitialConditions_fatal('Only class methods or top-level functions can be converted to getters.');
        } )());
    }

    test_checkInitialConditions_returnTypeVoid() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('void test() {}
            this._createRefactoring('test');
            this._assertInitialConditions_fatal('Cannot convert function returning void.');
        } )());
    }

    _assertInitialConditions_fatal(message : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : message});
        } )());
    }

    _assertSuccessfulRefactoring(expectedCode : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertRefactoringConditionsOK();
            let refactoringChange : any = await this.refactoring.createChange();
            this.refactoringChange = refactoringChange;
            this.assertTestChangeResult(expectedCode);
        } )());
    }

    _createRefactoring(elementName : string) : void {
        let element : any = this.findElement(elementName);
        this._createRefactoringForElement(element);
    }
    _createRefactoringForElement(element : any) : void {
        this.refactoring = new bare.createInstance(any,null,this.searchEngine,this.astProvider,element);
    }
    _createRefactoringForString(search : string) : void {
        let element : any = this.findNodeElementAtString(search);
        this._createRefactoringForElement(element);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConvertMethodToGetterTest() {
    }
}

export class properties {
}