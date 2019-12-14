/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/inline_local_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_refactoring";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(InlineLocalTest);
    });
};
export namespace InlineLocalTest {
    export type Constructors = lib3.RefactoringTest.Constructors | 'InlineLocalTest';
    export type Interface = Omit<InlineLocalTest, Constructors>;
}
@DartClass
export class InlineLocalTest extends lib3.RefactoringTest {
    refactoring : any;

    test_access() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test =');
            expect(this.refactoring.refactoringName,'Inline Local Variable');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.variableName,'test');
            expect(this.refactoring.referenceCount,2);
        } )());
    }

    test_bad_selectionMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('main() {');
            let status : any = await this.refactoring.checkInitialConditions();
            this._assert_fatalError_selection(status);
        } )());
    }

    test_bad_selectionParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(int test) {
            this._createRefactoring('test) {');
            let status : any = await this.refactoring.checkInitialConditions();
            this._assert_fatalError_selection(status);
        } )());
    }

    test_bad_selectionVariable_hasAssignments_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test = 0');
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedContextSearch : 'test = 1'});
        } )());
    }

    test_bad_selectionVariable_hasAssignments_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test = 0');
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedContextSearch : 'test += 1'});
        } )());
    }

    test_bad_selectionVariable_notInBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test = 0');
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL);
        } )());
    }

    test_bad_selectionVariable_notInitialized() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test;');
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL);
        } )());
    }

    test_OK_cascade_intoCascade() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('class A {
        } )());
    }

    test_OK_cascade_intoNotCascade() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('class A {
        } )());
    }

    test_OK_inSwitchCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main(int p) {
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main(int p) {
        } )());
    }

    test_OK_intoStringInterpolation_binaryExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_OK_intoStringInterpolation_simpleIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_OK_intoStringInterpolation_string_differentQuotes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_OK_intoStringInterpolation_string_doubleQuotes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_OK_intoStringInterpolation_string_multiLineIntoMulti_leadingSpaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit("main() {
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring("main() {
        } )());
    }

    test_OK_intoStringInterpolation_string_multiLineIntoMulti_unixEOL() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit("main() {
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring("main() {
        } )());
    }

    test_OK_intoStringInterpolation_string_multiLineIntoMulti_windowsEOL() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit(new core.DartString("main() {
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring(new core.DartString("main() {
        } )());
    }

    test_OK_intoStringInterpolation_string_multiLineIntoSingle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_OK_intoStringInterpolation_string_raw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_OK_intoStringInterpolation_string_singleLineIntoMulti_doubleQuotes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_OK_intoStringInterpolation_string_singleLineIntoMulti_singleQuotes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit("main() {
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring("main() {
        } )());
    }

    test_OK_intoStringInterpolation_string_singleQuotes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('a =');
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_OK_intoStringInterpolation_stringInterpolation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('b =');
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_OK_keepNextCommentedLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_OK_noUsages_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_OK_noUsages_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_OK_oneUsage() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_OK_parenthesis_decrement_intoNegate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_OK_parenthesis_instanceCreation_intoList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {}
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('class A {}
        } )());
    }

    test_OK_parenthesis_intoIndexExpression_index() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_OK_parenthesis_intoParenthesizedExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('f(m, x, y) {
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('f(m, x, y) {
        } )());
    }

    test_OK_parenthesis_negate_intoNegate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_OK_parenthesis_plus_intoMultiply() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    test_OK_twoUsages() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test =');
            return this.assertSuccessfulRefactoring('main() {
        } )());
    }

    _assert_fatalError_selection(status : any) : void {
        expect(this.refactoring.variableName,isNull);
        expect(this.refactoring.referenceCount,0);
        this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
            expectedMessage : 'Local variable declaration or reference must be ' + 'selected to activate this refactoring.'});
    }
    _createRefactoring(search : string) : void {
        let offset : number = this.findOffset(search);
        this.refactoring = new bare.createInstance(any,null,this.searchEngine,this.astProvider,this.testUnit,offset);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InlineLocalTest() {
    }
}

export class properties {
}