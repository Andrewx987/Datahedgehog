/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/hint_code_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test_case";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(HintCodeTest);
    });
};
export namespace HintCodeTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'HintCodeTest';
    export type Interface = Omit<HintCodeTest, Constructors>;
}
@DartClass
export class HintCodeTest extends lib3.ResolverTestCase {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    reset() : void {
        super.resetWith({
            packages : new core.DartList.literal(new core.DartList.literal('meta','library meta;
    }
    test_abstractSuperMemberReference_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.ABSTRACT_SUPER_MEMBER_REFERENCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_abstractSuperMemberReference_method_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.ABSTRACT_SUPER_MEMBER_REFERENCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_abstractSuperMemberReference_method_reference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.ABSTRACT_SUPER_MEMBER_REFERENCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_abstractSuperMemberReference_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('abstract class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.ABSTRACT_SUPER_MEMBER_REFERENCE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_functionType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_argumentTypeNotAssignable_message() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(StaticWarningCode.ARGUMENT_TYPE_NOT_ASSIGNABLE.message,HintCode.ARGUMENT_TYPE_NOT_ASSIGNABLE.message);
        } )());
    }

    test_argumentTypeNotAssignable_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.ARGUMENT_TYPE_NOT_ASSIGNABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_canBeNullAfterNullAware_false_methodInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_canBeNullAfterNullAware_false_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_canBeNullAfterNullAware_false_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_canBeNullAfterNullAware_methodInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.CAN_BE_NULL_AFTER_NULL_AWARE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_canBeNullAfterNullAware_parenthesized() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.CAN_BE_NULL_AFTER_NULL_AWARE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_canBeNullAfterNullAware_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.CAN_BE_NULL_AFTER_NULL_AWARE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_conditionalElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_conditionalElse_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_conditionalIf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_conditionalIf_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_else() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_else_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_if() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_if_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_while() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadBlock_while_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadCatch_catchFollowingCatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE_CATCH_FOLLOWING_CATCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadCatch_catchFollowingCatch_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE_CATCH_FOLLOWING_CATCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadCatch_catchFollowingCatch_object() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE_CATCH_FOLLOWING_CATCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadCatch_catchFollowingCatch_object_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE_CATCH_FOLLOWING_CATCH));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadCatch_onCatchSubtype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE_ON_CATCH_SUBTYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadCatch_onCatchSubtype_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE_ON_CATCH_SUBTYPE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadFinalReturnInCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadFinalStatementInCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE,StaticWarningCode.CASE_BLOCK_NOT_TERMINATED));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadOperandLHS_and() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadOperandLHS_and_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadOperandLHS_or() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_deadOperandLHS_or_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterBreak_inDefaultCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(v) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterBreak_inForEachStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterBreak_inForStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterBreak_inSwitchCase() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(v) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterBreak_inWhileStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(v) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterContinue_inForEachStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterContinue_inForStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterContinue_inWhileStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(v) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterExitingIf_returns() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterRethrow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterReturn_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterReturn_ifStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(bool b) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterReturn_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterReturn_nested() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterReturn_twoReturns() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deadCode_statementAfterThrow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEAD_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_call() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_deprecated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_Deprecated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_export() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("export 'deprecated_library.dart';");
            this.addNamedSource("/deprecated_library.dart",'@deprecated
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_import() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'deprecated_library.dart\';
            this.addNamedSource("/deprecated_library.dart",'@deprecated
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_indexExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_instanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_instanceCreation_namedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_operator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_superConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedAnnotationUse_superConstructor_namedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MEMBER_USE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedFunction_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class Function {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_FUNCTION_CLASS_DECLARATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedFunction_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A extends Function {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_EXTENDS_FUNCTION,StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedFunction_extends2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class Function {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_FUNCTION_CLASS_DECLARATION,HintCode.DEPRECATED_EXTENDS_FUNCTION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedFunction_mixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A extends Object with Function {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_MIXIN_FUNCTION,StaticWarningCode.FUNCTION_WITHOUT_CALL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_deprecatedFunction_mixin2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class Function {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DEPRECATED_FUNCTION_CLASS_DECLARATION,HintCode.DEPRECATED_MIXIN_FUNCTION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_divisionOptimization_double() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(double x, double y) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DIVISION_OPTIMIZATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_divisionOptimization_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int x, int y) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DIVISION_OPTIMIZATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_divisionOptimization_propagatedType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(x, y) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DIVISION_OPTIMIZATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_divisionOptimization_wrappedBinaryExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(int x, int y) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DIVISION_OPTIMIZATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateImport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib1.dart",'library lib1;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DUPLICATE_IMPORT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateImport2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib1.dart",'library lib1;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DUPLICATE_IMPORT,HintCode.DUPLICATE_IMPORT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_duplicateImport3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib1.dart",'library lib1;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.DUPLICATE_IMPORT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory__expr_return_null_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory_abstract_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory_bad_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.INVALID_FACTORY_METHOD_IMPL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory_block_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory_block_return_null_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory_expr_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory_misplaced_annotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.INVALID_FACTORY_ANNOTATION,HintCode.INVALID_FACTORY_ANNOTATION,HintCode.INVALID_FACTORY_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory_no_return_type_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory_subclass_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_factory_void_return() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.INVALID_FACTORY_METHOD_DECL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_importDeferredLibraryWithLoadFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveWithErrors(new core.DartList.literal<string>('library lib1;
        } )());
    }

    test_invalidAssignment_instanceVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.INVALID_ASSIGNMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAssignment_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f(var y) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.INVALID_ASSIGNMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAssignment_message() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(StaticTypeWarningCode.INVALID_ASSIGNMENT.message,HintCode.INVALID_ASSIGNMENT.message);
        } )());
    }

    test_invalidAssignment_staticVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.INVALID_ASSIGNMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidAssignment_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class Point {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.INVALID_ASSIGNMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidImmutableAnnotation_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.INVALID_IMMUTABLE_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_closure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource('/lib1.dart','import \'package:meta/meta.dart\';
            let source2 : any = this.addNamedSource('/lib2.dart','import \'lib1.dart\';
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(HintCode.INVALID_USE_OF_PROTECTED_MEMBER));
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_invalidUseOfProtectedMember_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource('/lib1.dart','import \'package:meta/meta.dart\';
            let source2 : any = this.addNamedSource('/lib2.dart','import \'lib1.dart\';
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(HintCode.INVALID_USE_OF_PROTECTED_MEMBER));
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_invalidUseOfProtectedMember_field_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource('/lib1.dart','import \'package:meta/meta.dart\';
            let source2 : any = this.addNamedSource('/lib2.dart','import \'lib1.dart\';
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(HintCode.INVALID_USE_OF_PROTECTED_MEMBER));
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_invalidUseOfProtectedMember_function_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_function_OK2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource('/lib1.dart','import \'package:meta/meta.dart\';
            let source2 : any = this.addNamedSource('/lib2.dart','import \'lib1.dart\';
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(HintCode.INVALID_USE_OF_PROTECTED_MEMBER));
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_invalidUseOfProtectedMember_getter_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_in_docs_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_message() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource('/lib1.dart','import \'package:meta/meta.dart\';
            let source2 : any = this.addNamedSource('/lib2.dart','import \'lib1.dart\';
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(HintCode.INVALID_USE_OF_PROTECTED_MEMBER));
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_invalidUseOfProtectedMember_method_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource('/lib1.dart','import \'package:meta/meta.dart\';
            let source2 : any = this.addNamedSource('/lib2.dart','import \'lib1.dart\';
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(HintCode.INVALID_USE_OF_PROTECTED_MEMBER));
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_invalidUseOfProtectedMember_method_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_OK_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_OK_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_OK_3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_OK_4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_OK_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_OK_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_OK_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_OK_setter_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addNamedSource('/lib1.dart','import \'package:meta/meta.dart\';
            let source2 : any = this.addNamedSource('/lib2.dart','import \'lib1.dart\';
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source2,new core.DartList.literal(HintCode.INVALID_USE_OF_PROTECTED_MEMBER));
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_invalidUseOfProtectedMember_setter_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_invalidUseOfProtectedMember_topLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isDouble() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.dart2jsHint = true;
            this.resetWith({
                options : options});
            let source : any = this.addSource("var v = 1 is double;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.IS_DOUBLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isInt() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var v = 1 is int;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.IS_INT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isNotDouble() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.dart2jsHint = true;
            this.resetWith({
                options : options});
            let source : any = this.addSource("var v = 1 is! double;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.IS_NOT_DOUBLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_isNotInt() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("var v = 1 is! int;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.IS_NOT_INT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_js_lib_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('@JS()
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingJsLibAnnotation_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library foo;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_JS_LIB_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingJsLibAnnotation_externalField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:js/js.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(ParserErrorCode.EXTERNAL_FIELD,HintCode.MISSING_JS_LIB_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingJsLibAnnotation_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library foo;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_JS_LIB_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingJsLibAnnotation_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library foo;
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_JS_LIB_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingJsLibAnnotation_variable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:js/js.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_JS_LIB_ANNOTATION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingReturn_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'dart:async\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_RETURN));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingReturn_factory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_RETURN));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingReturn_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("int f() {}");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_RETURN));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_missingReturn_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_RETURN));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mustBeImmutable_direct() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MUST_BE_IMMUTABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mustBeImmutable_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MUST_BE_IMMUTABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mustBeImmutable_fromMixin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MUST_BE_IMMUTABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mustBeImmutable_instance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal());
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mustCallSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MUST_CALL_SUPER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mustCallSuper_fromInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal());
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mustCallSuper_indirect() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MUST_CALL_SUPER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_mustCallSuper_overridden() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal());
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_assert() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_conditionalExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_do() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_for() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if_conditionalAnd_first() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if_conditionalAnd_second() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if_conditionalAnd_third() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if_conditionalOr_first() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if_conditionalOr_second() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if_conditionalOr_third() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if_not() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_if_parenthesized() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_nullAwareInCondition_while() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(x) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.NULL_AWARE_IN_CONDITION));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideEqualsButNotHashCode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.OVERRIDE_EQUALS_BUT_NOT_HASH_CODE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingField_invalid() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.OVERRIDE_ON_NON_OVERRIDING_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingGetter_invalid() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.OVERRIDE_ON_NON_OVERRIDING_GETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingMethod_invalid() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.OVERRIDE_ON_NON_OVERRIDING_METHOD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_overrideOnNonOverridingSetter_invalid() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.OVERRIDE_ON_NON_OVERRIDING_SETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_constructor_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_REQUIRED_PARAM_WITH_DETAILS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_constructor_param_no_reason() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_REQUIRED_PARAM));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_constructor_param_null_reason() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_REQUIRED_PARAM));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_constructor_param_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_constructor_param_redirecting_cons_call() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_REQUIRED_PARAM));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_constructor_param_super_call() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_REQUIRED_PARAM_WITH_DETAILS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_function_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_REQUIRED_PARAM_WITH_DETAILS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_method_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_REQUIRED_PARAM_WITH_DETAILS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_method_param_in_other_lib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addNamedSource('/a_lib.dart','library a_lib;
            let source : any = this.addSource('import "a_lib.dart";
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_REQUIRED_PARAM_WITH_DETAILS));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_required_typedef_function_param() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('import \'package:meta/meta.dart\';
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.MISSING_REQUIRED_PARAM));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_strongMode_downCastCompositeHint() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.strongMode = true;
            options.strongModeHints = true;
            this.resetWith({
                options : options});
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StrongModeCode.DOWN_CAST_COMPOSITE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_strongMode_downCastCompositeNoHint() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            options.strongMode = true;
            options.strongModeHints = false;
            this.resetWith({
                options : options});
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_strongMode_downCastCompositeWarn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let options : any = new bare.createInstance(any,null);
            applyToAnalysisOptions(options,new core.DartMap.literal([
                [AnalyzerOptions.analyzer,new core.DartMap.literal([
                    [AnalyzerOptions.errors,new core.DartMap.literal([
                        [StrongModeCode.DOWN_CAST_COMPOSITE.name,'warning']])]])]]));
            options.strongMode = true;
            options.strongModeHints = false;
            this.resetWith({
                options : options});
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StrongModeCode.DOWN_CAST_COMPOSITE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_strongMode_topLevelInstanceGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.resetWith({
                options : ((_) : any =>  {
                    {
                        _.strongMode = true;
                        return _;
                    }
                })(new bare.createInstance(any,null))});
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(StrongModeCode.TOP_LEVEL_INSTANCE_GETTER));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeCheck_type_is_Null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(i) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.TYPE_CHECK_IS_NULL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_typeCheck_type_not_Null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(i) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.TYPE_CHECK_IS_NOT_NULL));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_GETTER));
        } )());
    }

    test_undefinedGetter_message() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(StaticWarningCode.UNDEFINED_GETTER.message,StaticTypeWarningCode.UNDEFINED_GETTER.message);
        } )());
    }

    test_undefinedIdentifier_exportHide() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib1.dart","library lib1;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_HIDDEN_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedIdentifier_exportShow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib1.dart","library lib1;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_SHOWN_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedIdentifier_importHide() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib1.dart","library lib1;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_IMPORT,HintCode.UNDEFINED_HIDDEN_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedIdentifier_importShow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            this.addNamedSource("/lib1.dart","library lib1;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_IMPORT,HintCode.UNDEFINED_SHOWN_NAME));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_undefinedMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('f() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedMethod_assignmentExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_METHOD));
        } )());
    }

    test_undefinedOperator_binaryExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_undefinedOperator_indexBoth() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_undefinedOperator_indexGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_undefinedOperator_indexSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_undefinedOperator_postfixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_undefinedOperator_prefixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_OPERATOR));
        } )());
    }

    test_undefinedSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNDEFINED_SETTER));
        } )());
    }

    test_undefinedSetter_message() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(StaticWarningCode.UNDEFINED_SETTER.message,StaticTypeWarningCode.UNDEFINED_SETTER.message);
        } )());
    }

    test_unnecessaryCast_type_supertype() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(int i) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_CAST));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryCast_type_type() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(num i) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_CAST));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryNoSuchMethod_blockBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_NO_SUCH_METHOD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryNoSuchMethod_expressionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_NO_SUCH_METHOD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryTypeCheck_null_is_Null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("bool b = null is Null;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_TYPE_CHECK_TRUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryTypeCheck_null_not_Null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("bool b = null is! Null;");
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_TYPE_CHECK_FALSE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryTypeCheck_type_is_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(i) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_TYPE_CHECK_TRUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryTypeCheck_type_is_object() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(i) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_TYPE_CHECK_TRUE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryTypeCheck_type_not_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(i) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_TYPE_CHECK_FALSE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unnecessaryTypeCheck_type_not_object() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('m(i) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNNECESSARY_TYPE_CHECK_FALSE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_isUsed_extends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_isUsed_fieldDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let src = 'class Foo {
            let source : any = this.addSource(src);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_isUsed_implements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_isUsed_instanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_isUsed_staticFieldAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_isUsed_staticMethodInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_isUsed_typeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_notUsed_inClassMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_notUsed_inConstructorName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_notUsed_isExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_notUsed_noReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_class_notUsed_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class _A {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_enum_isUsed_fieldReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('enum _MyEnum {A, B, C}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_enum_notUsed_noReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('enum _MyEnum {A, B, C}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionLocal_isUsed_closure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionLocal_isUsed_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionLocal_isUsed_reference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionLocal_notUsed_noReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionLocal_notUsed_referenceFromItself() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionTop_isUsed_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('_f() {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionTop_isUsed_reference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('_f() {}
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionTop_notUsed_noReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('_f() {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionTop_notUsed_referenceFromItself() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('_f(int p) {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionTypeAlias_isUsed_isExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('typedef _F(a, b);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionTypeAlias_isUsed_reference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('typedef _F(a, b);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionTypeAlias_isUsed_typeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('typedef _F(a, b);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionTypeAlias_isUsed_variableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('typedef _F(a, b);
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_functionTypeAlias_notUsed_noReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('typedef _F(a, b);
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_getter_isUsed_invocation_implicitThis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_getter_isUsed_invocation_PrefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_getter_isUsed_invocation_PropertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_getter_notUsed_noReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_getter_notUsed_referenceFromItself() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_hasReference_implicitThis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_hasReference_implicitThis_subclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_hasReference_PrefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_hasReference_PropertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_invocation_implicitThis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_invocation_implicitThis_subclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_invocation_MemberElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A<T> {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_invocation_propagated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_invocation_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_invocation_subclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_notPrivate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_isUsed_staticInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_notUsed_noReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_method_notUsed_referenceFromItself() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_setter_isUsed_invocation_implicitThis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_setter_isUsed_invocation_PrefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_setter_isUsed_invocation_PropertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_setter_notUsed_noReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedElement_setter_notUsed_referenceFromItself() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_ELEMENT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_isUsed_argument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_isUsed_reference_implicitThis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_isUsed_reference_implicitThis_expressionFunctionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_isUsed_reference_implicitThis_subclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_isUsed_reference_qualified_propagatedElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_isUsed_reference_qualified_staticElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_isUsed_reference_qualified_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_notUsed_compoundAssign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_notUsed_constructorFieldInitializers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_notUsed_fieldFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_notUsed_noReference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_notUsed_nullAssign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_notUsed_postfixExpr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_notUsed_prefixExpr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedField_notUsed_simpleAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedElement = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_FIELD));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedImport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            let source2 : any = this.addNamedSource("/lib1.dart","library lib1;");
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_IMPORT));
            this.assertNoErrors(source2);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_unusedImport_as() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_IMPORT));
            this.assertNoErrors(source2);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_unusedImport_as_equalPrefixes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;
            let source3 : any = this.addNamedSource("/lib2.dart",'library lib2;
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            await this.computeAnalysisResult(source3);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_IMPORT));
            this.assertNoErrors(source2);
            this.assertNoErrors(source3);
            this.verify(new core.DartList.literal(source,source2,source3));
        } )());
    }

    test_unusedImport_hide() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_IMPORT));
            this.assertNoErrors(source2);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_unusedImport_inComment_libraryDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('/// Use [Future] class.
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
        } )());
    }

    test_unusedImport_show() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_IMPORT));
            this.assertNoErrors(source2);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_unusedLocalVariable_inCatch_exception() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_CATCH_CLAUSE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_inCatch_exception_hasStack() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_inCatch_exception_noOnClause() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertNoErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_inCatch_stackTrace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_CATCH_STACK));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_inCatch_stackTrace_used() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_inFor_underscore_ignored() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_inFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_LOCAL_VARIABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_inMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_LOCAL_VARIABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_isInvoked() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('typedef Foo();
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_isNullAssigned() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('typedef Foo();
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_isRead_notUsed_compoundAssign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_LOCAL_VARIABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_isRead_notUsed_postfixExpr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_LOCAL_VARIABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_isRead_notUsed_prefixExpr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_LOCAL_VARIABLE));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_isRead_usedArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('main() {
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedLocalVariable_isRead_usedInvocationTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.enableUnusedLocalVariable = true;
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source);
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_unusedShownName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_SHOWN_NAME));
            this.assertNoErrors(source2);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_unusedShownName_as() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_SHOWN_NAME));
            this.assertNoErrors(source2);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_unusedShownName_duplicates() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_SHOWN_NAME,HintCode.UNUSED_SHOWN_NAME));
            this.assertNoErrors(source2);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_unusedShownName_topLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('library L;
            let source2 : any = this.addNamedSource("/lib1.dart",'library lib1;
            await this.computeAnalysisResult(source);
            await this.computeAnalysisResult(source2);
            this.assertErrors(source,new core.DartList.literal(HintCode.UNUSED_SHOWN_NAME));
            this.assertNoErrors(source2);
            this.verify(new core.DartList.literal(source,source2));
        } )());
    }

    test_useOfVoidResult_assignmentExpression_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void f() {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.USE_OF_VOID_RESULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_useOfVoidResult_assignmentExpression_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.USE_OF_VOID_RESULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_useOfVoidResult_inForLoop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.USE_OF_VOID_RESULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_useOfVoidResult_variableDeclaration_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('void f() {}
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.USE_OF_VOID_RESULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_useOfVoidResult_variableDeclaration_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.USE_OF_VOID_RESULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    test_useOfVoidResult_variableDeclaration_method2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('class A {
            await this.computeAnalysisResult(source);
            this.assertErrors(source,new core.DartList.literal(HintCode.USE_OF_VOID_RESULT,HintCode.USE_OF_VOID_RESULT));
            this.verify(new core.DartList.literal(source));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    HintCodeTest() {
    }
}

export class properties {
}