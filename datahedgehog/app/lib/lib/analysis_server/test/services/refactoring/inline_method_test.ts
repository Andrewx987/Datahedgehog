/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/refactoring/inline_method_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_refactoring";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(InlineMethodTest);
    });
};
export namespace InlineMethodTest {
    export type Constructors = lib3.RefactoringTest.Constructors | 'InlineMethodTest';
    export type Interface = Omit<InlineMethodTest, Constructors>;
}
@DartClass
export class InlineMethodTest extends lib3.RefactoringTest {
    refactoring : any;

    deleteSource : boolean;

    inlineAll : boolean;

    test_access_FunctionElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(1, 2)');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.refactoringName,'Inline Function');
            expect(this.refactoring.className,isNull);
            expect(this.refactoring.methodName,'test');
            expect(this.refactoring.isDeclaration,isFalse);
        } )());
    }

    test_access_MethodElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('test(a, b)');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.refactoringName,'Inline Method');
            expect(this.refactoring.className,'A');
            expect(this.refactoring.methodName,'test');
            expect(this.refactoring.isDeclaration,isTrue);
        } )());
    }

    test_bad_async_intoSyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';
            this._createRefactoring('test async');
            return this._assertConditionsFatal('Cannot inline async into sync*.');
        } )());
    }

    test_bad_async_targetIsSync_doesNotReturnFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';
            this._createRefactoring('test async');
            return this._assertConditionsFatal('Cannot inline async into a function that does not return a Future.');
        } )());
    }

    test_bad_asyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';
            this._createRefactoring('test() async*');
            return this._assertConditionsFatal('Cannot inline a generator.');
        } )());
    }

    test_bad_cascadeInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('test() {');
            let status : any = await this.refactoring.checkAllConditions();
            let location = new bare.createInstance(any,null,this.findOffset('..test()'),new core.DartString('..test()').length);
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : 'Cannot inline cascade invocation.',expectedContextRange : location});
        } )());
    }

    test_bad_constructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('named() {}');
            return this._assertInvalidSelection();
        } )());
    }

    test_bad_deleteSource_inlineOne() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(1, 2)');
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatusOK(status);
            this.refactoring.deleteSource = true;
            this.refactoring.inlineAll = false;
            status = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : 'All references must be inlined to remove the source.'});
        } )());
    }

    test_bad_notExecutableElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring(') {');
            return this._assertInvalidSelection();
        } )());
    }

    test_bad_notSimpleIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test;');
            return this._assertInvalidSelection();
        } )());
    }

    test_bad_operator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('-(other)');
            return this._assertConditionsFatal('Cannot inline operator.');
        } )());
    }

    test_bad_propertyAccessor_synthetic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('fff);');
            return this._assertInvalidSelection();
        } )());
    }

    test_bad_reference_toClassMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('test(a, b)');
            return this._assertConditionsFatal('Cannot inline class method reference.');
        } )());
    }

    test_bad_severalReturns() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test() {
            this._createRefactoring('test() {');
            return this._assertConditionsError('Ambiguous return value.');
        } )());
    }

    test_fieldAccessor_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('foo {');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_fieldAccessor_getter_PropertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('foo {');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_fieldAccessor_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('foo(x) {');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_fieldAccessor_setter_PropertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('foo(x) {');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_function_expressionFunctionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) => a + b;
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_function_hasReturn_assign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_function_hasReturn_hasReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('int test(a, b) {
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_function_hasReturn_noVars_oneUsage() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_function_multilineString() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit("main() {
            this._createRefactoring('test() {');
            return this._assertSuccessfulRefactoring("main() {
        } )());
    }

    test_function_noReturn_hasVars_hasConflict_fieldSuperClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_function_noReturn_hasVars_hasConflict_fieldThisClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_function_noReturn_hasVars_hasConflict_localAfter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_function_noReturn_hasVars_hasConflict_localBefore() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_function_noReturn_hasVars_noConflict() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_function_noReturn_noVars_oneUsage() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_function_noReturn_noVars_useIndentation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_function_noReturn_voidReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('void test(a, b) {
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_function_notStatement_oneStatement_assign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(int p) {
            this._createRefactoring('test(int p)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_function_notStatement_oneStatement_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(int p) {
            this._createRefactoring('test(int p)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_function_notStatement_severalStatements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(int p) {
            this._createRefactoring('test(int p)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_function_notStatement_zeroStatements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(int p) {
            this._createRefactoring('test(int p)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_function_singleStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('var topLevelField = 0;
            this._createRefactoring('test() {');
            return this._assertSuccessfulRefactoring('var topLevelField = 0;
        } )());
    }

    test_getter_async_targetIsAsync() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';
            this._createRefactoring('test async');
            return this._assertSuccessfulRefactoring('import \'dart:async\';
        } )());
    }

    test_getter_async_targetIsAsyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';
            this._createRefactoring('test async');
            return this._assertSuccessfulRefactoring('import \'dart:async\';
        } )());
    }

    test_getter_async_targetIsSync() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';
            this._createRefactoring('test async');
            return this._assertSuccessfulRefactoring('import \'dart:async\';
        } )());
    }

    test_getter_async_targetIsSync2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';
            this._createRefactoring('test async');
            return this._assertSuccessfulRefactoring('import \'dart:async\';
        } )());
    }

    test_getter_classMember_instance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('result =>');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_getter_classMember_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('result =>');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_getter_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('String get message => \'Hello, World!\';
            this._createRefactoring('message =>');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_initialMode_all() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(a, b)');
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.deleteSource,true);
            expect(this.refactoring.inlineAll,true);
        } )());
    }

    test_initialMode_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(1, 2)');
            this.deleteSource = false;
            await this.refactoring.checkInitialConditions();
            expect(this.refactoring.deleteSource,false);
            expect(this.refactoring.inlineAll,false);
        } )());
    }

    test_method_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';
            this._createRefactoring('test() async');
            return this._assertSuccessfulRefactoring('import \'dart:async\';
        } )());
    }

    test_method_async2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('import \'dart:async\';
            this._createRefactoring('test() async');
            return this._assertSuccessfulRefactoring('import \'dart:async\';
        } )());
    }

    test_method_emptyBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('abstract class A {
            this._createRefactoring('test();');
            return this._assertConditionsFatal('Cannot inline method without body.');
        } )());
    }

    test_method_fieldInstance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('test() {');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_method_fieldStatic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('test() {');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_method_fieldStatic_sameClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('test() {');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_method_methodInstance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('test();');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_method_methodStatic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('test();');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_method_singleStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('test() {');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_method_this() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('test(A a) {');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_method_unqualifiedInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('test(a, b) {');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_namedArgument_inBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('fa(pa) => fb(pb: true);
            this._createRefactoring('fa(null)');
            return this._assertSuccessfulRefactoring('fa(pa) => fb(pb: true);
        } )());
    }

    test_namedArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test({a: 0, b: 2}) {
            this._createRefactoring('test({');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_noArgument_named_hasDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.indexTestUnit('test({a: 42}) {
            this._createRefactoring('test(');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_noArgument_positional_hasDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.indexTestUnit('test([a = 42]) {
            this._createRefactoring('test(');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_noArgument_positional_noDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.indexTestUnit('test([a]) {
            this._createRefactoring('test(');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_noArgument_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.indexTestUnit('test(a) {
            this._createRefactoring('test();');
            let status : any = await this.refactoring.checkAllConditions();
            let location = new bare.createInstance(any,null,this.findOffset('test();'),new core.DartString('test()').length);
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : 'No argument for the parameter "a".',expectedContextRange : location});
        } )());
    }

    test_reference_expressionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('String message() => \'Hello, World!\';
            this._createRefactoring('message()');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_reference_noStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('foo(p1, p2, p3) => p1 && (p2 || p3);
        } )());
    }

    test_reference_toLocal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('main() {
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_reference_toTopLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_removeEmptyLinesBefore_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('test() {');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_setter_classMember_instance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('class A {
            this._createRefactoring('result(x)');
            return this._assertSuccessfulRefactoring('class A {
        } )());
    }

    test_setter_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('void set result(x) {
            this._createRefactoring('result(x)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_oneUsage() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_oneUsage_keepMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(a, b)');
            this.deleteSource = false;
            return this._assertSuccessfulRefactoring('test(a, b) {
        } )());
    }

    test_singleExpression_twoUsages() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_twoUsages_inlineOne() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(1, 2)');
            return this._assertSuccessfulRefactoring('test(a, b) {
        } )());
    }

    test_singleExpression_wrapIntoParenthesized_alreadyInMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_wrapIntoParenthesized_asNeeded() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(a, b) {
            this._createRefactoring('test(a, b)');
            return this._assertSuccessfulRefactoring('main() {
        } )());
    }

    test_singleExpression_wrapIntoParenthesized_bool() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.indexTestUnit('test(bool a, bool b) {
            this._createRefactoring('test(bool a, bool b)');
            return this._assertSuccessfulRefactoring('main(bool p, bool p2, bool p3) {
        } )());
    }

    _assertConditionsError(message : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let status : any = await this.refactoring.checkAllConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.ERROR,{
                expectedMessage : message});
        } )());
    }

    _assertConditionsFatal(message : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let status : any = await this.refactoring.checkAllConditions();
            this.assertRefactoringStatus(status,RefactoringProblemSeverity.FATAL,{
                expectedMessage : message});
        } )());
    }

    _assertInvalidSelection() : async.Future<any> {
        return this._assertConditionsFatal('Method declaration or reference must be selected to activate this refactoring.');
    }
    _assertSuccessfulRefactoring(expectedCode : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let status : any = await this.refactoring.checkInitialConditions();
            this.assertRefactoringStatusOK(status);
            if (this.deleteSource != null) {
                this.refactoring.deleteSource = this.deleteSource;
            }
            if (this.inlineAll != null) {
                this.refactoring.inlineAll = this.inlineAll;
            }
            status = await this.refactoring.checkFinalConditions();
            this.assertRefactoringStatusOK(status);
            let change : any = await this.refactoring.createChange();
            this.refactoringChange = change;
            this.assertTestChangeResult(expectedCode);
        } )());
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
    InlineMethodTest() {
    }
}

export class properties {
}