/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/convert_getter_to_method_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_refactoring";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ConvertGetterToMethodTest);
    });
};
export namespace ConvertGetterToMethodTest {
    export type Constructors = lib3.RefactoringTest.Constructors | 'ConvertGetterToMethodTest';
    export type Interface = Omit<ConvertGetterToMethodTest, Constructors>;
}
@DartClass
export class ConvertGetterToMethodTest extends lib3.RefactoringTest {
    refactoring : any;

    test_change_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('int get test => 42;
            this._createRefactoring('test');
            return this._assertSuccessfulRefactoring('int test() => 42;
        } )());
    }

    test_change_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoringForString('test => 2');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_change_multipleFiles() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexUnit('/other.dart','class A {
            await this.indexTestUnit('import \'other.dart\';
            this._createRefactoringForString('test => 2');
            return this._assertSuccessfulRefactoring('import \'other.dart\';
        } )());
    }

    test_checkInitialConditions_syntheticGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('int test = 42;
            this._createRefactoring('test');
            this._assertInitialConditions_fatal('Only explicit getters can be converted to methods.');
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
        let element : any = this.findElement(elementName,ElementKind.GETTER);
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
    ConvertGetterToMethodTest() {
    }
}

export class properties {
}