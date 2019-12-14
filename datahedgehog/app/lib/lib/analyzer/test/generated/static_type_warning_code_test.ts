/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/static_type_warning_code_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test_case";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(StaticTypeWarningCodeTest);
        defineReflectiveTests(StrongModeStaticTypeWarningCodeTest);
    });
};
export namespace StaticTypeWarningCodeTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'StaticTypeWarningCodeTest';
    export type Interface = Omit<StaticTypeWarningCodeTest, Constructors>;
}
@DartClass
export class StaticTypeWarningCodeTest extends lib3.ResolverTestCase {
    fail_method_lookup_mixin_of_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableSuperMixins = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInUnverifiedCode('class A { a() => null; }
        } )());
    }

    fail_method_lookup_mixin_of_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableSuperMixins = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInUnverifiedCode('class A { a() => null; }
        } )());
    }

    fail_method_lookup_mixin_of_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableSuperMixins = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInUnverifiedCode('class A {}
        } )());
    }

    fail_method_lookup_mixin_of_mixin_application() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.enableSuperMixins = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInUnverifiedCode('class A { a() => null; }
        } )());
    }

    fail_typeArgumentNotMatchingBounds_ofFunctionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    fail_undefinedEnumConstant() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('enum E { ONE }
        } )());
    }

    test_ambiguousImport_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib1.dart\';
            this.addNamedSource("/lib1.dart",'library lib1;
            this.addNamedSource("/lib2.dart",'library lib2;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticWarningCode.AMBIGUOUS_IMPORT));
        } )());
    }

    test_assert_message_suppresses_type_promotion() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class C {
        } )());
    }

    test_await_flattened() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';
        } )());
    }

    test_await_simple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';
        } )());
    }

    test_awaitForIn_declaredVariableRightType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('import \'dart:async\';
        } )());
    }

    test_awaitForIn_declaredVariableWrongType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';
        } )());
    }

    test_awaitForIn_downcast() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('import \'dart:async\';
        } )());
    }

    test_awaitForIn_dynamicStream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() async {
        } )());
    }

    test_awaitForIn_dynamicVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('import \'dart:async\';
        } )());
    }

    test_awaitForIn_existingVariableRightType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('import \'dart:async\';
        } )());
    }

    test_awaitForIn_existingVariableWrongType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';
        } )());
    }

    test_awaitForIn_notStream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() async {
        } )());
    }

    test_awaitForIn_streamOfDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('import \'dart:async\';
        } )());
    }

    test_awaitForIn_upcast() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('import \'dart:async\';
        } )());
    }

    test_bug21912() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_expectedOneListTypeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('main() {
        } )());
    }

    test_expectedTwoMapTypeArguments_one() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('main() {
        } )());
    }

    test_expectedTwoMapTypeArguments_three() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('main() {
        } )());
    }

    test_forIn_declaredVariableRightType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() {
        } )());
    }

    test_forIn_declaredVariableWrongType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {
        } )());
    }

    test_forIn_downcast() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() {
        } )());
    }

    test_forIn_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() {
        } )());
    }

    test_forIn_dynamicIterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() {
        } )());
    }

    test_forIn_dynamicVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() {
        } )());
    }

    test_forIn_existingVariableRightType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() {
        } )());
    }

    test_forIn_existingVariableWrongType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {
        } )());
    }

    test_forIn_iterableOfDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() {
        } )());
    }

    test_forIn_notIterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {
        } )());
    }

    test_forIn_object() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() {
        } )());
    }

    test_forIn_typeBoundBad() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class Foo<T extends Iterable<int>> {
        } )());
    }

    test_forIn_typeBoundGood() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('class Foo<T extends Iterable<int>> {
        } )());
    }

    test_forIn_upcast() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('f() {
        } )());
    }

    test_illegalAsyncGeneratorReturnType_function_nonStream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('int f() async* {}
        } )());
    }

    test_illegalAsyncGeneratorReturnType_function_subtypeOfStream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInCode('import \'dart:async\';
        } )());
    }

    test_illegalAsyncGeneratorReturnType_method_nonStream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class C {
        } )());
    }

    test_illegalAsyncGeneratorReturnType_method_subtypeOfStream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInCode('import \'dart:async\';
        } )());
    }

    test_illegalAsyncReturnType_function_nonFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('int f() async {}
        } )());
    }

    test_illegalAsyncReturnType_function_subtypeOfFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInCode('import \'dart:async\';
        } )());
    }

    test_illegalAsyncReturnType_method_nonFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class C {
        } )());
    }

    test_illegalAsyncReturnType_method_subtypeOfFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInCode('import \'dart:async\';
        } )());
    }

    test_illegalSyncGeneratorReturnType_function_nonIterator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('int f() sync* {}
        } )());
    }

    test_illegalSyncGeneratorReturnType_function_subclassOfIterator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInCode('abstract class SubIterator<T> implements Iterator<T> {}
        } )());
    }

    test_illegalSyncGeneratorReturnType_method_nonIterator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class C {
        } )());
    }

    test_illegalSyncGeneratorReturnType_method_subclassOfIterator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInCode('abstract class SubIterator<T> implements Iterator<T> {}
        } )());
    }

    test_inconsistentMethodInheritance_paramCount() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('abstract class A {
        } )());
    }

    test_inconsistentMethodInheritance_paramType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('abstract class A {
        } )());
    }

    test_inconsistentMethodInheritance_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('abstract class A {
        } )());
    }

    test_instanceAccessToStaticMember_method_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_instanceAccessToStaticMember_method_reference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_instanceAccessToStaticMember_propertyAccess_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_instanceAccessToStaticMember_propertyAccess_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_instanceAccessToStaticMember_propertyAccess_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_invalidAssignment_compoundAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class byte {
        } )());
    }

    test_invalidAssignment_defaultValue_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f({String x: 0}) {
        } )());
    }

    test_invalidAssignment_defaultValue_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f([String x = 0]) {
        } )());
    }

    test_invalidAssignment_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('main() {
        } )());
    }

    test_invalidAssignment_functionExpressionInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('main() {
        } )());
    }

    test_invalidAssignment_ifNullAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('void f(int i) {
        } )());
    }

    test_invalidAssignment_instanceVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_invalidAssignment_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {
        } )());
    }

    test_invalidAssignment_regressionInIssue18468Fix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class C<T> {
        } )());
    }

    test_invalidAssignment_staticVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_invalidAssignment_topLevelVariableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode("int x = 'string';",new core.DartList.literal(StaticTypeWarningCode.INVALID_ASSIGNMENT));
        } )());
    }

    test_invalidAssignment_typeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class B<T> {
        } )());
    }

    test_invalidAssignment_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_invocationOfNonFunction_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_invocationOfNonFunction_localGenericFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.enableStrictCallChecks = true;
            this.resetWith({
                options : options});
            await this.assertErrorsInCode('f(Function f) {
        } )());
    }

    test_invocationOfNonFunction_localObject() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.enableStrictCallChecks = true;
            this.resetWith({
                options : options});
            await this.assertErrorsInCode('f(Object o) {
        } )());
    }

    test_invocationOfNonFunction_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {
        } )());
    }

    test_invocationOfNonFunction_ordinaryInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_invocationOfNonFunction_staticInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_invocationOfNonFunction_superExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_invocationOfNonFunctionExpression_literal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {
        } )());
    }

    test_nonBoolCondition_conditional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode("f() { return 3 ? 2 : 1; }",new core.DartList.literal(StaticTypeWarningCode.NON_BOOL_CONDITION));
        } )());
    }

    test_nonBoolCondition_do() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {
        } )());
    }

    test_nonBoolCondition_for() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {
        } )());
    }

    test_nonBoolCondition_if() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {
        } )());
    }

    test_nonBoolCondition_while() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {
        } )());
    }

    test_nonBoolExpression_functionType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('int makeAssertion() => 1;
        } )());
    }

    test_nonBoolExpression_interfaceType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {
        } )());
    }

    test_nonBoolNegationExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() {
        } )());
    }

    test_nonBoolOperand_and_left() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('bool f(int left, bool right) {
        } )());
    }

    test_nonBoolOperand_and_right() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('bool f(bool left, String right) {
        } )());
    }

    test_nonBoolOperand_or_left() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('bool f(List<int> left, bool right) {
        } )());
    }

    test_nonBoolOperand_or_right() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('bool f(bool left, double right) {
        } )());
    }

    test_nonTypeAsTypeArgument_notAType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('int A;
        } )());
    }

    test_nonTypeAsTypeArgument_undefinedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class B<E> {}
        } )());
    }

    test_returnOfInvalidType_async_future_int_mismatches_future_string() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';
        } )());
    }

    test_returnOfInvalidType_async_future_int_mismatches_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('int f() async {
        } )());
    }

    test_returnOfInvalidType_expressionFunctionBody_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode("int f() => '0';",new core.DartList.literal(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE));
        } )());
    }

    test_returnOfInvalidType_expressionFunctionBody_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode("int get g => '0';",new core.DartList.literal(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE));
        } )());
    }

    test_returnOfInvalidType_expressionFunctionBody_localFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_returnOfInvalidType_expressionFunctionBody_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_returnOfInvalidType_not_issued_for_expressionFunctionBody_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode("void f() => 42;");
        } )());
    }

    test_returnOfInvalidType_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode("int f() { return '0'; }",new core.DartList.literal(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE));
        } )());
    }

    test_returnOfInvalidType_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode("int get g { return '0'; }",new core.DartList.literal(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE));
        } )());
    }

    test_returnOfInvalidType_localFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_returnOfInvalidType_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_returnOfInvalidType_not_issued_for_valid_generic_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertNoErrorsInCode('abstract class F<T, U>  {
        } )());
    }

    test_returnOfInvalidType_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode("void f() { return 42; }",new core.DartList.literal(StaticTypeWarningCode.RETURN_OF_INVALID_TYPE));
        } )());
    }

    test_typeArgumentNotMatchingBounds_classTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_typeArgumentNotMatchingBounds_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_typeArgumentNotMatchingBounds_extends_regressionInIssue18468Fix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class X<T extends Type> {}
        } )());
    }

    test_typeArgumentNotMatchingBounds_fieldFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_typeArgumentNotMatchingBounds_functionReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_typeArgumentNotMatchingBounds_functionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_typeArgumentNotMatchingBounds_functionTypedFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_typeArgumentNotMatchingBounds_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_typeArgumentNotMatchingBounds_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_typeArgumentNotMatchingBounds_methodInvocation_localFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInCode('class Point<T extends num> {
        } )());
    }

    test_typeArgumentNotMatchingBounds_methodInvocation_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInCode('class Point<T extends num> {
        } )());
    }

    test_typeArgumentNotMatchingBounds_methodInvocation_topLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            await this.assertErrorsInCode('class Point<T extends num> {
        } )());
    }

    test_typeArgumentNotMatchingBounds_methodReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_typeArgumentNotMatchingBounds_new() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_typeArgumentNotMatchingBounds_new_superTypeOfUpperBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_typeArgumentNotMatchingBounds_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_typeArgumentNotMatchingBounds_redirectingConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_typeArgumentNotMatchingBounds_typeArgumentList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_typeArgumentNotMatchingBounds_typeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_typeArgumentNotMatchingBounds_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_typeArgumentNotMatchingBounds_with() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_typeParameterSupertypeOfItsBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A<T extends T> {
        } )());
    }

    test_typePromotion_booleanAnd_useInRight_accessedInClosureRight_mutated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('callMe(f()) { f(); }
        } )());
    }

    test_typePromotion_booleanAnd_useInRight_mutatedInLeft() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {
        } )());
    }

    test_typePromotion_booleanAnd_useInRight_mutatedInRight() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {
        } )());
    }

    test_typePromotion_conditional_useInThen_accessedInClosure_hasAssignment_after() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('callMe(f()) { f(); }
        } )());
    }

    test_typePromotion_conditional_useInThen_accessedInClosure_hasAssignment_before() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('callMe(f()) { f(); }
        } )());
    }

    test_typePromotion_conditional_useInThen_hasAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {
        } )());
    }

    test_typePromotion_if_accessedInClosure_hasAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('callMe(f()) { f(); }
        } )());
    }

    test_typePromotion_if_and_right_hasAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {
        } )());
    }

    test_typePromotion_if_extends_notMoreSpecific_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class V {}
        } )());
    }

    test_typePromotion_if_extends_notMoreSpecific_notMoreSpecificTypeArg() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class V {}
        } )());
    }

    test_typePromotion_if_hasAssignment_after() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {
        } )());
    }

    test_typePromotion_if_hasAssignment_before() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {
        } )());
    }

    test_typePromotion_if_hasAssignment_inClosure_anonymous_after() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {
        } )());
    }

    test_typePromotion_if_hasAssignment_inClosure_anonymous_before() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {
        } )());
    }

    test_typePromotion_if_hasAssignment_inClosure_function_after() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {
        } )());
    }

    test_typePromotion_if_hasAssignment_inClosure_function_before() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('main(Object p) {
        } )());
    }

    test_typePromotion_if_implements_notMoreSpecific_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class V {}
        } )());
    }

    test_typePromotion_if_with_notMoreSpecific_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class V {}
        } )());
    }

    test_undefinedFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('void f() {
        } )());
    }

    test_undefinedFunction_inCatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('void f() {
        } )());
    }

    test_undefinedFunction_inImportedLib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'lib.dart\' as f;
            this.addNamedSource("/lib.dart",'library lib;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_FUNCTION));
        } )());
    }

    test_undefinedGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class T {}
        } )());
    }

    test_undefinedGetter_generic_function_call() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.enableStrictCallChecks = true;
            this.resetWith({
                options : options});
            await this.assertErrorsInUnverifiedCode('f(Function f) {
        } )());
    }

    test_undefinedGetter_object_call() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.enableStrictCallChecks = true;
            this.resetWith({
                options : options});
            await this.assertErrorsInUnverifiedCode('f(Object o) {
        } )());
    }

    test_undefinedGetter_proxy_annotation_fakeProxy() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('library L;
        } )());
    }

    test_undefinedGetter_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}
        } )());
    }

    test_undefinedGetter_typeLiteral_cascadeTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class T {
        } )());
    }

    test_undefinedGetter_typeLiteral_conditionalAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_undefinedGetter_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class T {
        } )());
    }

    test_undefinedGetter_wrongNumberOfTypeArguments_tooLittle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A<K, V> {
        } )());
    }

    test_undefinedGetter_wrongNumberOfTypeArguments_tooMany() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A<E> {
        } )());
    }

    test_undefinedGetter_wrongOfTypeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A<E> {
        } )());
    }

    test_undefinedMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_undefinedMethod_assignmentExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_undefinedMethod_generic_function_call() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.enableStrictCallChecks = true;
            this.resetWith({
                options : options});
            await this.assertErrorsInCode('f(Function f) {
        } )());
    }

    test_undefinedMethod_ignoreTypePropagation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_undefinedMethod_leastUpperBoundWithNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f(bool b, int i) => (b ? null : i).foo();',new core.DartList.literal(StaticTypeWarningCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedMethod_object_call() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.enableStrictCallChecks = true;
            this.resetWith({
                options : options});
            await this.assertErrorsInCode('f(Object o) {
        } )());
    }

    test_undefinedMethod_ofNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('Null f(int x) => null;
        } )());
    }

    test_undefinedMethod_private() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource("/lib.dart",'library lib;
            await this.assertErrorsInCode('import \'lib.dart\';
        } )());
    }

    test_undefinedMethod_proxy_annotation_fakeProxy() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('library L;
        } )());
    }

    test_undefinedMethod_typeLiteral_cascadeTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class T {
        } )());
    }

    test_undefinedMethod_typeLiteral_conditionalAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_undefinedMethodWithConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class C {
        } )());
    }

    test_undefinedOperator_indexBoth() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}
        } )());
    }

    test_undefinedOperator_indexGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}
        } )());
    }

    test_undefinedOperator_indexSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}
        } )());
    }

    test_undefinedOperator_plus() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}
        } )());
    }

    test_undefinedOperator_postfixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_undefinedOperator_prefixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_undefinedSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class T {}
        } )());
    }

    test_undefinedSetter_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}
        } )());
    }

    test_undefinedSetter_typeLiteral_cascadeTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class T {
        } )());
    }

    test_undefinedSetter_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class T {
        } )());
    }

    test_undefinedSuperGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_undefinedSuperMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_undefinedSuperOperator_binaryExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}
        } )());
    }

    test_undefinedSuperOperator_indexBoth() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}
        } )());
    }

    test_undefinedSuperOperator_indexGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}
        } )());
    }

    test_undefinedSuperOperator_indexSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInUnverifiedCode('class A {}
        } )());
    }

    test_undefinedSuperSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_unqualifiedReferenceToNonLocalStaticMember_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_unqualifiedReferenceToNonLocalStaticMember_getter_invokeTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_unqualifiedReferenceToNonLocalStaticMember_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_unqualifiedReferenceToNonLocalStaticMember_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {
        } )());
    }

    test_wrongNumberOfTypeArguments_classAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_wrongNumberOfTypeArguments_tooFew() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A<E, F> {}
        } )());
    }

    test_wrongNumberOfTypeArguments_tooMany() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A<E> {}
        } )());
    }

    test_wrongNumberOfTypeArguments_typeTest_tooFew() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_wrongNumberOfTypeArguments_typeTest_tooMany() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('class A {}
        } )());
    }

    test_yield_async_to_basic_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('int f() async* {
        } )());
    }

    test_yield_async_to_iterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('Iterable<int> f() async* {
        } )());
    }

    test_yield_async_to_mistyped_stream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';
        } )());
    }

    test_yield_each_async_non_stream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() async* {
        } )());
    }

    test_yield_each_async_to_mistyped_stream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';
        } )());
    }

    test_yield_each_sync_non_iterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() sync* {
        } )());
    }

    test_yield_each_sync_to_mistyped_iterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('Iterable<int> f() sync* {
        } )());
    }

    test_yield_sync_to_basic_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('int f() sync* {
        } )());
    }

    test_yield_sync_to_mistyped_iterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('Iterable<int> f() sync* {
        } )());
    }

    test_yield_sync_to_stream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StaticTypeWarningCodeTest() {
    }
}

export namespace StrongModeStaticTypeWarningCodeTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'StrongModeStaticTypeWarningCodeTest';
    export type Interface = Omit<StrongModeStaticTypeWarningCodeTest, Constructors>;
}
@DartClass
export class StrongModeStaticTypeWarningCodeTest extends lib3.ResolverTestCase {
    setUp() : void {
        super.setUp();
        let options : any = new bare.createInstance(any,null);
        options.strongMode = true;
        this.resetWith({
            options : options});
    }
    test_genericMethodWrongNumberOfTypeArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {}
            let analysisResult : lib3.TestAnalysisResult = await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StaticTypeWarningCode.WRONG_NUMBER_OF_TYPE_ARGUMENTS_METHOD));
            for(let error of analysisResult.errors) {
                if (op(Op.EQUALS,error.errorCode,StaticTypeWarningCode.WRONG_NUMBER_OF_TYPE_ARGUMENTS)) {
                    expect(error.message,formatList(error.errorCode.message,new core.DartList.literal('() → dynamic',0,1)));
                }
            }
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_legalAsyncGeneratorReturnType_function_supertypeOfStream() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';
        } )());
    }

    test_legalAsyncReturnType_function_supertypeOfFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('import \'dart:async\';
        } )());
    }

    test_legalSyncGeneratorReturnType_function_supertypeOfIterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assertErrorsInCode('f() sync* { yield 42; }
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StrongModeStaticTypeWarningCodeTest() {
    }
}

export class properties {
}