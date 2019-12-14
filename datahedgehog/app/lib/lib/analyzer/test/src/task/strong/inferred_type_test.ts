/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/strong/inferred_type_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./strong_test_helper";

export var main : () => void = () : void =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(InferredTypeTest);
        defineReflectiveTests(InferredTypeTest_Driver);
    });
};
export namespace InferredTypeMixin {
    export type Constructors = 'InferredTypeMixin';
    export type Interface = Omit<InferredTypeMixin, Constructors>;
}
@DartClass
export class InferredTypeMixin {
    get hasExtraTaskModelPass() : boolean {
        return true;
    }
    @AbstractProperty
    get mayCheckTypesOfLocals() : boolean{ throw 'abstract'}
    @Abstract
    addFile(content : string,_namedArguments? : {name? : string}) : void{ throw 'abstract'}
    @Abstract
    checkFileElement(content : string) : async.Future<any>{ throw 'abstract'}
    test_asyncClosureReturnType_flatten() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('import \'dart:async\';
            let futureInt = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(futureInt.name,'futureInt');
            expect(futureInt.type.toString(),'Future<int>');
            let f = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(f.name,'f');
            expect(f.type.toString(),'() → Future<int>');
            let g = op(Op.INDEX,mainUnit.topLevelVariables,2);
            expect(g.name,'g');
            expect(g.type.toString(),'() → Future<int>');
        } )());
    }

    test_asyncClosureReturnType_future() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('var f = () async => 0;');
            let f = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(f.name,'f');
            expect(f.type.toString(),'() → Future<int>');
        } )());
    }

    test_asyncClosureReturnType_futureOr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('import \'dart:async\';
            let futureOrInt = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(futureOrInt.name,'futureOrInt');
            expect(futureOrInt.type.toString(),'FutureOr<int>');
            let f = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(f.name,'f');
            expect(f.type.toString(),'() → FutureOr<int>');
            let g = op(Op.INDEX,mainUnit.topLevelVariables,2);
            expect(g.name,'g');
            expect(g.type.toString(),'() → Future<int>');
        } )());
    }

    test_blockBodiedLambdas_async_allReturnsAreFutures() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('import \'dart:async\';
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → Future<num>');
        } )());
    }

    test_blockBodiedLambdas_async_allReturnsAreValues() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('import \'dart:async\';
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → Future<num>');
        } )());
    }

    test_blockBodiedLambdas_async_mixOfValuesAndFutures() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('import \'dart:async\';
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → Future<num>');
        } )());
    }

    test_blockBodiedLambdas_asyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('import \'dart:async\';
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → Stream<num>');
        } )());
    }

    test_blockBodiedLambdas_basic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('test1() {
        } )());
    }

    test_blockBodiedLambdas_downwardsIncompatibleWithUpwardsInference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('main() {
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → String');
        } )());
    }

    test_blockBodiedLambdas_downwardsIncompatibleWithUpwardsInference_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('String f() => null;
            let f = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(f.type.toString(),'() → String');
        } )());
    }

    test_blockBodiedLambdas_inferBottom_async() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('import \'dart:async\';
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → Future<Null>');
        } )());
    }

    test_blockBodiedLambdas_inferBottom_asyncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('import \'dart:async\';
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → Stream<Null>');
        } )());
    }

    test_blockBodiedLambdas_inferBottom_sync() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('var h = null;
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,1).localVariables,0);
            expect(f.type.toString(),'(Object) → Null');
        } )());
    }

    test_blockBodiedLambdas_inferBottom_syncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('main() {
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → Iterable<Null>');
        } )());
    }

    test_blockBodiedLambdas_LUB() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:math\' show Random;
        } )());
    }

    test_blockBodiedLambdas_nestedLambdas() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('main() {
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → (int) → double');
        } )());
    }

    test_blockBodiedLambdas_noReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('test1() {
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,1);
            expect(f.type.toString(),'Iterable<Null>');
        } )());
    }

    test_blockBodiedLambdas_syncStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let mainUnit = await this.checkFileElement('main() {
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → Iterable<num>');
        } )());
    }

    test_bottom() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('var v = null;
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'dynamic');
            expect(v.initializer.type.toString(),'() → Null');
        } )());
    }

    test_bottom_inClosure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('var v = () => null;
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'() → dynamic');
            expect(v.initializer.type.toString(),'() → () → dynamic');
        } )());
    }

    test_circularReference_viaClosures() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('var x = () => /*error:TOP_LEVEL_CYCLE*/y;
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            let y = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(x.name,'x');
            expect(y.name,'y');
            expect(x.type.toString(),'dynamic');
            expect(y.type.toString(),'dynamic');
        } )());
    }

    test_circularReference_viaClosures_initializerTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('var x = () => /*error:TOP_LEVEL_CYCLE*/y;
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            let y = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(x.name,'x');
            expect(y.name,'y');
            expect(x.initializer.returnType.toString(),'() → dynamic');
            expect(y.initializer.returnType.toString(),'() → dynamic');
        } )());
    }

    test_conflictsCanHappen() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class I1 {
        } )());
    }

    test_conflictsCanHappen2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class I1 {
        } )());
    }

    test_constructors_downwardsWithConstraint() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {}
        } )());
    }

    test_constructors_inferenceFBounded() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let errors = 'error:COULD_NOT_INFER,error:COULD_NOT_INFER';
            let unit = await this.checkFileElement(`class Clonable<T> {}
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(x.type.toString(),'Pair<Clonable<dynamic>, Clonable<dynamic>>');
        } )());
    }

    test_constructors_inferFromArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C<T> {
            let vars = op(Op.INDEX,unit.functions,0).localVariables;
            expect(op(Op.INDEX,vars,0).type.toString(),'C<int>');
            expect(vars.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.name,'c_int');
            }).type.toString(),'C<int>');
            expect(vars.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.name,'c_num');
            }).type.toString(),'C<num>');
            expect(vars.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.name,'c_dynamic');
            }).type.toString(),'C<dynamic>');
        } )());
    }

    test_constructors_inferFromArguments_argumentNotAssignable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class A {}
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,1).localVariables,0);
            expect(x.type.toString(),'C<NotA>');
        } )());
    }

    test_constructors_inferFromArguments_const() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C<T> {
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(x.type.toString(),'C<int>');
        } )());
    }

    test_constructors_inferFromArguments_constWithUpperBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class C<T extends num> {
        } )());
    }

    test_constructors_inferFromArguments_downwardsFromConstructor() {
        return this.checkFileElement('class C<T> { C(List<T> list); }
    }
    test_constructors_inferFromArguments_factory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C<T> {
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(x.type.toString(),'C<int>');
        } )());
    }

    test_constructors_inferFromArguments_factory_callsConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A<T> {
        } )());
    }

    test_constructors_inferFromArguments_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C<T> {
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(x.type.toString(),'C<int>');
        } )());
    }

    test_constructors_inferFromArguments_namedFactory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C<T> {
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(x.type.toString(),'C<int>');
        } )());
    }

    test_constructors_inferFromArguments_redirecting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C<T> {
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(x.type.toString(),'C<int>');
        } )());
    }

    test_constructors_inferFromArguments_redirectingFactory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('abstract class C<T> {
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(x.type.toString(),'C<int>');
        } )());
    }

    test_constructors_reverseTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class Pair<T, U> {
        } )());
    }

    test_constructors_tooManyPositionalArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class A<T> {}
            let vars = op(Op.INDEX,unit.functions,0).localVariables;
            expect(op(Op.INDEX,vars,0).type.toString(),'A<dynamic>');
        } )());
    }

    test_doNotInferOverriddenFieldsThatExplicitlySayDynamic_infer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {
        } )());
    }

    test_dontInferFieldTypeWhenInitializerIsNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var x = null;
        } )());
    }

    test_dontInferTypeOnDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('test() {
        } )());
    }

    test_dontInferTypeWhenInitializerIsNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('test() {
        } )());
    }

    test_downwardInference_fixes_noUpwardsErrors() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:math\';
        } )());
    }

    test_downwardInference_miscellaneous() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('typedef T Function2<S, T>(S x);
        } )());
    }

    test_downwardsInference_insideTopLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {
        } )());
    }

    test_downwardsInferenceAnnotations() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class Foo {
        } )());
    }

    test_downwardsInferenceAssignmentStatements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('void main() {
        } )());
    }

    test_downwardsInferenceAsyncAwait() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';
        } )());
    }

    test_downwardsInferenceForEach() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';
        } )());
    }

    test_downwardsInferenceInitializingFormalDefaultFormal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('typedef T Function2<S, T>([S x]);
        } )());
    }

    test_downwardsInferenceOnConstructorArguments_inferDownwards() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class F0 {
        } )());
    }

    test_downwardsInferenceOnFunctionArguments_inferDownwards() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('void f0(List<int> a) {}
        } )());
    }

    test_downwardsInferenceOnFunctionExpressions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('typedef T Function2<S, T>(S x);
        } )());
    }

    test_downwardsInferenceOnFunctionOfTUsingTheT() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('void main () {
        } )());
    }

    test_downwardsInferenceOnFunctionOfTUsingTheT_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('void main () {
        } )());
    }

    test_downwardsInferenceOnGenericConstructorArguments_emptyList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class F3<T> {
        } )());
    }

    test_downwardsInferenceOnGenericConstructorArguments_inferDownwards() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class F0<T> {
        } )());
    }

    test_downwardsInferenceOnGenericFunctionExpressions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('void main () {
        } )());
    }

    test_downwardsInferenceOnGenericFunctionExpressions_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('void main () {
        } )());
    }

    test_downwardsInferenceOnInstanceCreations_inferDownwards() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A<S, T> {
        } )());
    }

    test_downwardsInferenceOnListLiterals_inferDownwards() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('void foo([List<String> list1 = /*info:INFERRED_TYPE_LITERAL*/const [],
        } )());
    }

    test_downwardsInferenceOnListLiterals_inferIfValueTypesMatchContext() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class DartType {}
        } )());
    }

    test_downwardsInferenceOnMapLiterals() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('void foo([Map<int, String> m1 = /*info:INFERRED_TYPE_LITERAL*/const {1: "hello"},
        } )());
    }

    test_downwardsInferenceYieldYieldStar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';
        } )());
    }

    test_fieldRefersToStaticGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let x = op(Op.INDEX,op(Op.INDEX,mainUnit.types,0).fields,0);
            expect(x.type.toString(),'int');
        } )());
    }

    test_fieldRefersToTopLevelGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let x = op(Op.INDEX,op(Op.INDEX,mainUnit.types,0).fields,0);
            expect(x.type.toString(),'int');
        } )());
    }

    test_futureOr_subtyping() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';
        } )());
    }

    test_futureThen() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            var build : (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) => string = (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) : string =>  {
                let {declared,downwards,upwards} = Object.assign({
                }, _namedArguments );
                return `import 'dart:async';
            };
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "Future",upwards : "Future"}));
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "Future",upwards : "MyFuture"}));
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "MyFuture",upwards : "Future"}));
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "MyFuture",upwards : "MyFuture"}));
            await this.checkFileElement(build({
                declared : "Future",downwards : "Future",upwards : "MyFuture"}));
            await this.checkFileElement(build({
                declared : "Future",downwards : "Future",upwards : "Future"}));
        } )());
    }

    test_futureThen_conditional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            var build : (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) => string = (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) : string =>  {
                let {declared,downwards,upwards} = Object.assign({
                }, _namedArguments );
                return `import 'dart:async';
            };
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "Future",upwards : "Future"}));
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "Future",upwards : "MyFuture"}));
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "MyFuture",upwards : "Future"}));
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "MyFuture",upwards : "MyFuture"}));
            await this.checkFileElement(build({
                declared : "Future",downwards : "Future",upwards : "MyFuture"}));
            await this.checkFileElement(build({
                declared : "Future",downwards : "Future",upwards : "Future"}));
        } )());
    }

    test_futureThen_downwardsMethodTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';
        } )());
    }

    test_futureThen_explicitFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import "dart:async";
        } )());
    }

    test_futureThen_upwards() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            var build : (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) => string = (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) : string =>  {
                let {declared,downwards,upwards} = Object.assign({
                }, _namedArguments );
                return `import 'dart:async';
            };
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "Future",upwards : "Future"}));
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "MyFuture",upwards : "MyFuture"}));
            await this.checkFileElement(build({
                declared : "Future",downwards : "Future",upwards : "Future"}));
        } )());
    }

    test_futureThen_upwardsFromBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';
        } )());
    }

    test_futureUnion_asyncConditional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            var build : (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) => string = (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) : string =>  {
                let {declared,downwards,upwards} = Object.assign({
                }, _namedArguments );
                return `import 'dart:async';
            };
            await this.checkFileElement(build({
                downwards : "Future",upwards : "Future"}));
            await this.checkFileElement(build({
                downwards : "Future",upwards : "MyFuture"}));
        } )());
    }

    test_futureUnion_downwards() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            var build : (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) => string = (_namedArguments? : {declared? : string,downwards? : string,upwards? : string}) : string =>  {
                let {declared,downwards,upwards} = Object.assign({
                }, _namedArguments );
                return `import 'dart:async';
            };
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "Future",upwards : "Future"}));
            await this.checkFileElement(build({
                declared : "MyFuture",downwards : "Future",upwards : "MyFuture"}));
            await this.checkFileElement(build({
                declared : "Future",downwards : "Future",upwards : "Future"}));
            await this.checkFileElement(build({
                declared : "Future",downwards : "Future",upwards : "MyFuture"}));
        } )());
    }

    test_futureUnion_downwardsGenericMethodWithFutureReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';
        } )());
    }

    test_futureUnion_downwardsGenericMethodWithGenericReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';
        } )());
    }

    test_futureUnion_downwardsGenericMethodWithGenericReturn_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';
        } )());
    }

    test_futureUnion_upwardsGenericMethods() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';
        } )());
    }

    test_genericFunctions_returnTypedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('typedef void ToValue<T>(T value);
        } )());
    }

    test_genericFunctions_returnTypedef_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('typedef void ToValue<T>(T value);
        } )());
    }

    test_genericMethods_basicDownwardInference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('T f<S, T>(S s) => null;
        } )());
    }

    test_genericMethods_basicDownwardInference_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('/*=T*/ f/*<S, T>*/(/*=S*/ s) => null;
        } )());
    }

    test_genericMethods_correctlyRecognizeGenericUpperBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class Foo<T extends Pattern> {
        } )());
    }

    test_genericMethods_dartMathMinMax() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:math\';
        } )());
    }

    test_genericMethods_doNotInferInvalidOverrideOfGenericMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class C {
        } )());
    }

    test_genericMethods_doNotInferInvalidOverrideOfGenericMethod_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class C {
        } )());
    }

    test_genericMethods_downwardsInferenceAffectsArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('T f<T>(List<T> s) => null;
        } )());
    }

    test_genericMethods_downwardsInferenceAffectsArguments_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('/*=T*/ f/*<T>*/(List/*<T>*/ s) => null;
        } )());
    }

    test_genericMethods_downwardsInferenceFold() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('void main() {
        } )());
    }

    test_genericMethods_handleOverrideOfNonGenericWithGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class C {
        } )());
    }

    test_genericMethods_inferenceError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('main() {
        } )());
    }

    test_genericMethods_inferGenericFunctionParameterType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C<T> extends D<T> {
            let f = op(Op.INDEX,mainUnit.getType('C').methods,0);
            expect(f.type.toString(),'<U>(U) → (U) → void');
        } )());
    }

    test_genericMethods_inferGenericFunctionParameterType2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C<T> extends D<T> {
            let f = op(Op.INDEX,mainUnit.getType('C').methods,0);
            expect(f.type.toString(),'<U>(() → List<U>) → void');
        } )());
    }

    test_genericMethods_inferGenericFunctionParameterType2_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C<T> extends D<T> {
            let f = op(Op.INDEX,mainUnit.getType('C').methods,0);
            expect(f.type.toString(),'<U>(() → List<U>) → void');
        } )());
    }

    test_genericMethods_inferGenericFunctionParameterType_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C<T> extends D<T> {
            let f = op(Op.INDEX,mainUnit.getType('C').methods,0);
            expect(f.type.toString(),'<U>(U) → (U) → void');
        } )());
    }

    test_genericMethods_inferGenericFunctionReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C<T> extends D<T> {
            let f = op(Op.INDEX,mainUnit.getType('C').methods,0);
            expect(f.type.toString(),'<U>(U) → () → U');
        } )());
    }

    test_genericMethods_inferGenericFunctionReturnType_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C<T> extends D<T> {
            let f = op(Op.INDEX,mainUnit.getType('C').methods,0);
            expect(f.type.toString(),'<U>(U) → () → U');
        } )());
    }

    test_genericMethods_inferGenericInstantiation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:math\' as math;
        } )());
    }

    test_genericMethods_inferGenericMethodType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class C {
        } )());
    }

    test_genericMethods_inferGenericMethodType_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class C {
        } )());
    }

    test_genericMethods_inferJSBuiltin() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('/*error:IMPORT_INTERNAL_LIBRARY*/import \'dart:_foreign_helper\' show JS;
        } )());
    }

    test_genericMethods_IterableAndFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:async\';
        } )());
    }

    test_genericMethods_nestedGenericInstantiation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('import \'dart:math\' as math;
        } )());
    }

    test_genericMethods_usesGreatestLowerBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('typedef Iterable<num> F(int x);
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,1).localVariables,0);
            expect(v.type.toString(),'(num) → List<int>');
        } )());
    }

    test_genericMethods_usesGreatestLowerBound_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('typedef Iterable<num> F(int x);
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,1).localVariables,0);
            expect(v.type.toString(),'(num) → List<int>');
        } )());
    }

    test_genericMethods_usesGreatestLowerBound_comment_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('typedef Iterable<num> F(int x);
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'dynamic');
        } )());
    }

    test_infer_assignToIndex() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('List<double> a = <double>[];
        } )());
    }

    test_infer_assignToProperty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {
        } )());
    }

    test_infer_assignToProperty_custom() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {
        } )());
    }

    test_infer_assignToRef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {
        } )());
    }

    test_infer_binary_custom() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {
        } )());
    }

    test_infer_binary_doubleDouble() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var a_equal = 1.0 == 2.0;
        } )());
    }

    test_infer_binary_doubleInt() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var a_equal = 1.0 == 2;
        } )());
    }

    test_infer_binary_intDouble() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var a_equal = 1 == 2.0;
        } )());
    }

    test_infer_binary_intInt() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var a_equal = 1 == 2;
        } )());
    }

    test_infer_conditional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var a = 1 == 2 ? 1 : 2.0;
        } )());
    }

    test_infer_prefixExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var a_not = !true;
        } )());
    }

    test_infer_prefixExpression_custom() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {
        } )());
    }

    test_infer_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var t = true;
        } )());
    }

    test_infer_typeCast() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A<T> {}
        } )());
    }

    test_infer_typedListLiteral() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var a = <int>[];
        } )());
    }

    test_infer_typedMapLiteral() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var a = <int, String>{0: \'aaa\', 1: \'bbb\'};
        } )());
    }

    test_infer_use_of_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class B {
        } )());
    }

    test_inferConstsTransitively() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('const b1 = 2;
                name : '/b.dart'});
            this.addFile('import \'main.dart\';
                name : '/a.dart'});
            await this.checkFileElement('import \'a.dart\';
        } )());
    }

    test_inferCorrectlyOnMultipleVariablesDeclaredTogether() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {
        } )());
    }

    test_inferedType_usesSyntheticFunctionType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('int f() => null;
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'List<() → Object>');
        } )());
    }

    test_inferedType_usesSyntheticFunctionType_functionTypedParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('int f(int x(String y)) => null;
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'List<((String) → int) → Object>');
        } )());
    }

    test_inferedType_usesSyntheticFunctionType_namedParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('int f({int x}) => null;
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'List<({x: int}) → Object>');
        } )());
    }

    test_inferedType_usesSyntheticFunctionType_positionalParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('int f([int x]) => null;
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'List<([int]) → Object>');
        } )());
    }

    test_inferedType_usesSyntheticFunctionType_requiredParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('int f(int x) => null;
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'List<(int) → Object>');
        } )());
    }

    test_inferFromComplexExpressionsIfOuterMostValueIsPrecise() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A { int x; B operator+(other) => null; }
        } )());
    }

    test_inferFromRhsOnlyIfItWontConflictWithOverriddenFields() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {
        } )());
    }

    test_inferFromRhsOnlyIfItWontConflictWithOverriddenFields2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {
        } )());
    }

    test_inferFromVariablesInCycleLibsWhenFlagIsOn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('import \'main.dart\';
                name : '/a.dart'});
            await this.checkFileElement('import \'a.dart\';
        } )());
    }

    test_inferFromVariablesInCycleLibsWhenFlagIsOn2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('import \'main.dart\';
                name : '/a.dart'});
            await this.checkFileElement('import \'a.dart\';
        } )());
    }

    test_inferFromVariablesInNonCycleImportsWithFlag() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('var x = 2;
                name : '/a.dart'});
            await this.checkFileElement('import \'a.dart\';
        } )());
    }

    test_inferFromVariablesInNonCycleImportsWithFlag2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('class A { static var x = 2; }
                name : '/a.dart'});
            await this.checkFileElement('import \'a.dart\';
        } )());
    }

    test_inferGenericMethodType_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C {
            let y = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(y.type.toString(),'double');
        } )());
    }

    test_inferGenericMethodType_named_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C {
            let y = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(y.type.toString(),'double');
        } )());
    }

    test_inferGenericMethodType_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C {
            let y = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(y.type.toString(),'double');
        } )());
    }

    test_inferGenericMethodType_positional2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C {
            let y = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(y.type.toString(),'double');
        } )());
    }

    test_inferGenericMethodType_positional2_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C {
            let y = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(y.type.toString(),'double');
        } )());
    }

    test_inferGenericMethodType_positional_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C {
            let y = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(y.type.toString(),'double');
        } )());
    }

    test_inferGenericMethodType_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C {
            let y = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(y.type.toString(),'int');
        } )());
    }

    test_inferGenericMethodType_required_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C {
            let y = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(y.type.toString(),'int');
        } )());
    }

    test_inferListLiteralNestedInMapLiteral() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class Resource {}
        } )());
    }

    test_inferLocalFunctionReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('main() {
            let fns = op(Op.INDEX,unit.functions,0).functions;
            expect(op(Op.INDEX,fns,0).type.toString(),'() → int');
            expect(op(Op.INDEX,fns,1).type.toString(),'() → Future<int>');
            expect(op(Op.INDEX,fns,2).type.toString(),'() → int');
            expect(op(Op.INDEX,fns,3).type.toString(),'() → Future<int>');
            expect(op(Op.INDEX,fns,4).type.toString(),'() → Iterable<int>');
            expect(op(Op.INDEX,fns,5).type.toString(),'() → Stream<int>');
            expect(op(Op.INDEX,fns,6).type.toString(),'() → num');
            expect(op(Op.INDEX,fns,7).type.toString(),'() → dynamic');
            expect(op(Op.INDEX,fns,8).type.toString(),'() → dynamic');
            expect(op(Op.INDEX,fns,9).type.toString(),'() → Stream<int>');
        } )());
    }

    test_inferParameterType_setter_fromField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C extends D {
            let f = op(Op.INDEX,mainUnit.getType('C').accessors,0);
            expect(f.type.toString(),'(int) → void');
        } )());
    }

    test_inferParameterType_setter_fromSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C extends D {
            let f = op(Op.INDEX,mainUnit.getType('C').accessors,0);
            expect(f.type.toString(),'(int) → void');
        } )());
    }

    test_inferred_nonstatic_field_depends_on_static_field_complex() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let x = op(Op.INDEX,mainUnit.getType('C').fields,0);
            expect(x.name,'x');
            expect(x.type.toString(),'String');
            let y = op(Op.INDEX,mainUnit.getType('C').fields,1);
            expect(y.name,'y');
            expect(y.type.toString(),'Map<String, Map<String, String>>');
        } )());
    }

    test_inferred_nonstatic_field_depends_on_toplevel_var_simple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('var x = \'x\';
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.name,'x');
            expect(x.type.toString(),'String');
            let y = op(Op.INDEX,mainUnit.getType('C').fields,0);
            expect(y.name,'y');
            expect(y.type.toString(),'String');
        } )());
    }

    test_inferredInitializingFormalChecksDefaultValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class Foo {
        } )());
    }

    test_inferredType_blockClosure_noArgs_noReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {
            let f = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(f.type.toString(),'() → Null');
        } )());
    }

    test_inferredType_cascade() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class A {
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'A');
        } )());
    }

    test_inferredType_customBinaryOp() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let x = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(x.name,'x');
            expect(x.type.toString(),'bool');
        } )());
    }

    test_inferredType_customBinaryOp_viaInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class I {
            let x = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(x.name,'x');
            expect(x.type.toString(),'bool');
        } )());
    }

    test_inferredType_customIndexOp() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let x = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,1);
            expect(x.name,'x');
            expect(x.type.toString(),'bool');
        } )());
    }

    test_inferredType_customIndexOp_viaInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class I {
            let x = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,1);
            expect(x.name,'x');
            expect(x.type.toString(),'bool');
        } )());
    }

    test_inferredType_customUnaryOp() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let x = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(x.name,'x');
            expect(x.type.toString(),'bool');
        } )());
    }

    test_inferredType_customUnaryOp_viaInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class I {
            let x = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(x.name,'x');
            expect(x.type.toString(),'bool');
        } )());
    }

    test_inferredType_extractMethodTearOff() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.name,'x');
            expect(x.type.toString(),'() → bool');
        } )());
    }

    test_inferredType_extractMethodTearOff_viaInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class I {
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.name,'x');
            expect(x.type.toString(),'() → bool');
        } )());
    }

    test_inferredType_fromTopLevelExecutableTearoff() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('var v = print;
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'(Object) → void');
        } )());
    }

    test_inferredType_invokeMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.name,'x');
            expect(x.type.toString(),'bool');
        } )());
    }

    test_inferredType_invokeMethod_viaInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class I {
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.name,'x');
            expect(x.type.toString(),'bool');
        } )());
    }

    test_inferredType_isEnum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('enum E { v1 }
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.type.toString(),'E');
        } )());
    }

    test_inferredType_isEnumValues() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('enum E { v1 }
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.type.toString(),'List<E>');
        } )());
    }

    test_inferredType_isTypedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('typedef void F();
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.type.toString(),'Map<String, () → void>');
        } )());
    }

    test_inferredType_isTypedef_parameterized() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('typedef T F<T>();
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.type.toString(),'Map<String, () → int>');
        } )());
    }

    test_inferredType_viaClosure_multipleLevelsOfNesting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let f = op(Op.INDEX,mainUnit.getType('C').fields,0);
            expect(f.type.toString(),'(bool) → (int) → Map<int, bool>');
        } )());
    }

    test_inferredType_viaClosure_typeDependsOnArgs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let f = op(Op.INDEX,mainUnit.getType('C').fields,0);
            expect(f.type.toString(),'(bool) → bool');
        } )());
    }

    test_inferredType_viaClosure_typeIndependentOfArgs_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let f = op(Op.INDEX,mainUnit.getType('C').fields,0);
            expect(f.type.toString(),'(bool) → int');
        } )());
    }

    test_inferredType_viaClosure_typeIndependentOfArgs_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('final f = (bool b) => 1;');
            let f = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(f.type.toString(),'(bool) → int');
        } )());
    }

    test_inferReturnOfStatementLambda() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('List<String> strings() {
        } )());
    }

    test_inferStaticsTransitively() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('final b1 = 2;
                name : '/b.dart'});
            this.addFile('import \'main.dart\';
                name : '/a.dart'});
            await this.checkFileElement('import \'a.dart\';
        } )());
    }

    test_inferStaticsTransitively2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('const x1 = 1;
        } )());
    }

    test_inferStaticsTransitively3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('const a1 = 3;
                name : '/a.dart'});
            await this.checkFileElement('import \'a.dart\' show a1, A;
        } )());
    }

    test_inferStaticsWithMethodInvocations() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('m3(String a, String b, [a1,a2]) {}
                name : '/a.dart'});
            await this.checkFileElement('import \'a.dart\';
        } )());
    }

    test_inferTypeOnOverriddenFields2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {
        } )());
    }

    test_inferTypeOnOverriddenFields4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {
        } )());
    }

    test_inferTypeOnVar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('test1() {
        } )());
    }

    test_inferTypeOnVar2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('test2() {
        } )());
    }

    test_inferTypeOnVarFromField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {
        } )());
    }

    test_inferTypeOnVarFromTopLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('int x = 0;
        } )());
    }

    test_inferTypeRegardlessOfDeclarationOrderOrCycles() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('import \'main.dart\';
                name : '/b.dart'});
            await this.checkFileElement('import \'b.dart\';
        } )());
    }

    test_inferTypesOnGenericInstantiations_3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A<T> {
        } )());
    }

    test_inferTypesOnGenericInstantiations_4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A<T> {
        } )());
    }

    test_inferTypesOnGenericInstantiations_5() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('abstract class I<E> {
        } )());
    }

    test_inferTypesOnGenericInstantiations_infer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A<T> {
        } )());
    }

    test_inferTypesOnGenericInstantiationsInLibraryCycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('import \'main.dart\';
                name : '/a.dart'});
            await this.checkFileElement('import \'a.dart\';
        } )());
    }

    test_inferTypesOnLoopIndices_forEachLoop() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class Foo {
        } )());
    }

    test_inferTypesOnLoopIndices_forLoopWithInference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('test() {
        } )());
    }

    test_inferVariableVoid() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('void f() {}
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.name,'x');
            expect(x.type.toString(),'void');
        } )());
    }

    test_instantiateToBounds_generic2_hasBound_definedAfter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class B<T extends /*error:NOT_INSTANTIATED_BOUND*/A> {}
            expect(op(Op.INDEX,unit.topLevelVariables,0).type.toString(),'B<A<dynamic>>');
        } )());
    }

    test_instantiateToBounds_generic2_hasBound_definedBefore() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class A<T extends int> {}
            expect(op(Op.INDEX,unit.topLevelVariables,0).type.toString(),'B<A<dynamic>>');
        } )());
    }

    test_instantiateToBounds_generic2_noBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class A<T> {}
            expect(op(Op.INDEX,unit.topLevelVariables,0).type.toString(),'B<A<dynamic>>');
        } )());
    }

    test_instantiateToBounds_generic_hasBound_definedAfter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('A v = null;
            expect(op(Op.INDEX,unit.topLevelVariables,0).type.toString(),'A<int>');
        } )());
    }

    test_instantiateToBounds_generic_hasBound_definedBefore() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class A<T extends int> {}
            expect(op(Op.INDEX,unit.topLevelVariables,0).type.toString(),'A<int>');
        } )());
    }

    test_instantiateToBounds_invokeConstructor_noBound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C<T> {}
            let v = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(v.type.toString(),'C<dynamic>');
        } )());
    }

    test_instantiateToBounds_invokeConstructor_typeArgsExact() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class C<T extends num> {}
            expect(op(Op.INDEX,unit.topLevelVariables,0).type.toString(),'C<int>');
        } )());
    }

    test_instantiateToBounds_notGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('class A {}
            expect(op(Op.INDEX,unit.topLevelVariables,0).type.toString(),'B<A>');
        } )());
    }

    test_lambdaDoesNotHavePropagatedTypeHint() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('List<String> getListOfString() => const <String>[];
        } )());
    }

    test_listLiterals() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('test1() {
        } )());
    }

    test_listLiterals_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var x1 = /*info:INFERRED_TYPE_LITERAL*/[1, 2, 3];
        } )());
    }

    test_listLiteralsCanInferNull_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('var x = /*info:INFERRED_TYPE_LITERAL*/[null];
            let x = op(Op.INDEX,unit.topLevelVariables,0);
            expect(x.type.toString(),'List<Null>');
        } )());
    }

    test_listLiteralsCanInferNullBottom() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let unit = await this.checkFileElement('test1() {
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(x.type.toString(),'List<Null>');
        } )());
    }

    test_mapLiterals() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('test1() {
        } )());
    }

    test_mapLiterals_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var x1 = /*info:INFERRED_TYPE_LITERAL*/{ 1: \'x\', 2: \'y\' };
        } )());
    }

    test_mapLiteralsCanInferNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.mayCheckTypesOfLocals) {
                return;
            }
            let unit = await this.checkFileElement('test1() {
            let x = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,0);
            expect(x.type.toString(),'Map<Null, Null>');
        } )());
    }

    test_mapLiteralsCanInferNull_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('var x = /*info:INFERRED_TYPE_LITERAL*/{ null: null };
            let x = op(Op.INDEX,unit.topLevelVariables,0);
            expect(x.type.toString(),'Map<Null, Null>');
        } )());
    }

    test_methodCall_withTypeArguments_instanceMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'D<int>');
        } )());
    }

    test_methodCall_withTypeArguments_instanceMethod_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'D<int>');
        } )());
    }

    test_methodCall_withTypeArguments_instanceMethod_identifierSequence() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let v = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(v.name,'f');
            expect(v.type.toString(),'D<int>');
        } )());
    }

    test_methodCall_withTypeArguments_instanceMethod_identifierSequence_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let v = op(Op.INDEX,mainUnit.topLevelVariables,1);
            expect(v.name,'f');
            expect(v.type.toString(),'D<int>');
        } )());
    }

    test_methodCall_withTypeArguments_staticMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'D<int>');
        } )());
    }

    test_methodCall_withTypeArguments_staticMethod_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'D<int>');
        } )());
    }

    test_methodCall_withTypeArguments_topLevelFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('D<T> f<T>() => null;
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'D<int>');
        } )());
    }

    test_methodCall_withTypeArguments_topLevelFunction_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('D/*<T>*/ f/*<T>*/() => null;
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'D<int>');
        } )());
    }

    test_noErrorWhenDeclaredTypeIsNumAndAssignedNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('test1() {
        } )());
    }

    test_nullCoalescingOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('main() {
            let unit = await this.checkFileElement('main() {
            let y = op(Op.INDEX,op(Op.INDEX,unit.functions,0).localVariables,1);
            expect(y.initializer.returnType.toString(),'List<num>');
        } )());
    }

    test_nullLiteralShouldNotInferAsBottom() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('var h = null;
        } )());
    }

    test_propagateInferenceToFieldInClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {
        } )());
    }

    test_propagateInferenceToFieldInClassDynamicWarnings() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {
        } )());
    }

    test_propagateInferenceTransitively() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {
        } )());
    }

    test_propagateInferenceTransitively2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class A {
        } )());
    }

    test_referenceToTypedef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('typedef void F();
            let x = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(x.type.toString(),'Type');
        } )());
    }

    test_refineBinaryExpressionType_typeParameter_T_double() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class C<T extends num> {
        } )());
    }

    test_refineBinaryExpressionType_typeParameter_T_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class C<T extends num> {
        } )());
    }

    test_refineBinaryExpressionType_typeParameter_T_T() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.checkFileElement('class C<T extends num> {
        } )());
    }

    test_staticMethod_tearoff() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('const v = C.f;
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.type.toString(),'(String) → int');
        } )());
    }

    test_unsafeBlockClosureInference_closureCall() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'double');
        } )());
    }

    test_unsafeBlockClosureInference_constructorCall_explicitDynamicParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C<T> {
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'C<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_constructorCall_explicitTypeParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C<T> {
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'C<int>');
        } )());
    }

    test_unsafeBlockClosureInference_constructorCall_implicitTypeParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C<T> {
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'C<int>');
        } )());
    }

    test_unsafeBlockClosureInference_constructorCall_noTypeParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'C');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('List<T> f<T>(T g()) => <T>[g()];
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('dynamic /*=List<T>*/ f/*<T>*/(dynamic/*=T*/ g()) => <T>[g()];
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('List<T> f<T>(T g()) => <T>[g()];
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr1_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('dynamic /*=List<T>*/ f/*<T>*/(dynamic/*=T*/ g()) => <T>[g()];
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('List<T> f<T>(T g()) => <T>[g()];
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr2_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('dynamic /*=List<T>*/ f/*<T>*/(dynamic/*=T*/ g()) => <T>[g()];
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitTypeParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('List<T> f<T>(T g()) => <T>[g()];
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('dynamic /*=List<T>*/ f/*<T>*/(dynamic/*=T*/ g()) => <T>[g()];
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('List<T> f<T>(T g()) => <T>[g()];
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr1_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('dynamic /*=List<T>*/ f/*<T>*/(dynamic/*=T*/ g()) => <T>[g()];
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('List<T> f<T>(T g()) => <T>[g()];
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr2_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('dynamic /*=List<T>*/ f/*<T>*/(dynamic/*=T*/ g()) => <T>[g()];
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_implicitTypeParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_implicitTypeParam_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_implicitTypeParam_viaExpr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_implicitTypeParam_viaExpr_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_noTypeParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'double');
        } )());
    }

    test_unsafeBlockClosureInference_functionCall_noTypeParam_viaExpr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'double');
        } )());
    }

    test_unsafeBlockClosureInference_inList_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_inList_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('typedef int F();
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<() → int>');
        } )());
    }

    test_unsafeBlockClosureInference_inList_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<() → int>');
        } )());
    }

    test_unsafeBlockClosureInference_inMap_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'Map<int, dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_inMap_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('typedef int F();
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'Map<int, () → int>');
        } )());
    }

    test_unsafeBlockClosureInference_inMap_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('main() {
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'Map<int, () → int>');
        } )());
    }

    test_unsafeBlockClosureInference_methodCall_explicitDynamicParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_methodCall_explicitDynamicParam_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<dynamic>');
        } )());
    }

    test_unsafeBlockClosureInference_methodCall_explicitTypeParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_methodCall_explicitTypeParam_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_methodCall_implicitTypeParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_methodCall_implicitTypeParam_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let v = op(Op.INDEX,op(Op.INDEX,mainUnit.functions,0).localVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'List<int>');
        } )());
    }

    test_unsafeBlockClosureInference_methodCall_noTypeParam() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let mainUnit = await this.checkFileElement('class C {
            let v = op(Op.INDEX,mainUnit.topLevelVariables,0);
            expect(v.name,'v');
            expect(v.type.toString(),'double');
        } )());
    }

    test_voidReturnTypeSubtypesDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit = await this.checkFileElement('T run<T>(T f()) {
            let x = op(Op.INDEX,unit.topLevelVariables,0);
            let y = op(Op.INDEX,unit.topLevelVariables,1);
            expect(x.type.toString(),'dynamic');
            expect(y.type.toString(),'dynamic');
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    InferredTypeMixin() {
    }
}

export namespace InferredTypeTest {
    export type Constructors = lib3.AbstractStrongTest.Constructors | 'InferredTypeTest';
    export type Interface = Omit<InferredTypeTest, Constructors>;
}
@DartClass
@With(InferredTypeMixin)
export class InferredTypeTest extends lib3.AbstractStrongTest implements InferredTypeMixin.Interface {
    @Abstract
    addFile(content : string,_namedArguments? : {name? : string}) : void {
        let {name} = Object.assign({
            "name" : '/main.dart'}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    test_asyncClosureReturnType_flatten() : any {
        throw 'from mixin';
    }
    @Abstract
    test_asyncClosureReturnType_future() : any {
        throw 'from mixin';
    }
    @Abstract
    test_asyncClosureReturnType_futureOr() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_async_allReturnsAreFutures() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_async_allReturnsAreValues() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_async_mixOfValuesAndFutures() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_asyncStar() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_basic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_downwardsIncompatibleWithUpwardsInference() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_downwardsIncompatibleWithUpwardsInference_topLevel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_inferBottom_async() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_inferBottom_asyncStar() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_inferBottom_sync() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_inferBottom_syncStar() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_LUB() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_nestedLambdas() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_noReturn() : any {
        throw 'from mixin';
    }
    @Abstract
    test_blockBodiedLambdas_syncStar() : any {
        throw 'from mixin';
    }
    @Abstract
    test_bottom() : any {
        throw 'from mixin';
    }
    @Abstract
    test_bottom_inClosure() : any {
        throw 'from mixin';
    }
    @Abstract
    test_circularReference_viaClosures() : any {
        throw 'from mixin';
    }
    @Abstract
    test_circularReference_viaClosures_initializerTypes() : any {
        throw 'from mixin';
    }
    @Abstract
    test_conflictsCanHappen() : any {
        throw 'from mixin';
    }
    @Abstract
    test_conflictsCanHappen2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_downwardsWithConstraint() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferenceFBounded() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_argumentNotAssignable() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_const() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_constWithUpperBound() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_downwardsFromConstructor() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_factory() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_factory_callsConstructor() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_named() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_namedFactory() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_redirecting() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_inferFromArguments_redirectingFactory() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_reverseTypeParameters() : any {
        throw 'from mixin';
    }
    @Abstract
    test_constructors_tooManyPositionalArguments() : any {
        throw 'from mixin';
    }
    @Abstract
    test_doNotInferOverriddenFieldsThatExplicitlySayDynamic_infer() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dontInferFieldTypeWhenInitializerIsNull() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dontInferTypeOnDynamic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_dontInferTypeWhenInitializerIsNull() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardInference_fixes_noUpwardsErrors() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardInference_miscellaneous() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInference_insideTopLevel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceAnnotations() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceAssignmentStatements() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceAsyncAwait() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceForEach() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceInitializingFormalDefaultFormal() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnConstructorArguments_inferDownwards() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnFunctionArguments_inferDownwards() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnFunctionExpressions() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnFunctionOfTUsingTheT() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnFunctionOfTUsingTheT_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnGenericConstructorArguments_emptyList() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnGenericConstructorArguments_inferDownwards() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnGenericFunctionExpressions() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnGenericFunctionExpressions_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnInstanceCreations_inferDownwards() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnListLiterals_inferDownwards() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnListLiterals_inferIfValueTypesMatchContext() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceOnMapLiterals() : any {
        throw 'from mixin';
    }
    @Abstract
    test_downwardsInferenceYieldYieldStar() : any {
        throw 'from mixin';
    }
    @Abstract
    test_fieldRefersToStaticGetter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_fieldRefersToTopLevelGetter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureOr_subtyping() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureThen() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureThen_conditional() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureThen_downwardsMethodTarget() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureThen_explicitFuture() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureThen_upwards() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureThen_upwardsFromBlock() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureUnion_asyncConditional() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureUnion_downwards() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureUnion_downwardsGenericMethodWithFutureReturn() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureUnion_downwardsGenericMethodWithGenericReturn() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureUnion_downwardsGenericMethodWithGenericReturn_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_futureUnion_upwardsGenericMethods() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericFunctions_returnTypedef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericFunctions_returnTypedef_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_basicDownwardInference() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_basicDownwardInference_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_correctlyRecognizeGenericUpperBound() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_dartMathMinMax() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_doNotInferInvalidOverrideOfGenericMethod() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_doNotInferInvalidOverrideOfGenericMethod_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_downwardsInferenceAffectsArguments() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_downwardsInferenceAffectsArguments_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_downwardsInferenceFold() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_handleOverrideOfNonGenericWithGeneric() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferenceError() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferGenericFunctionParameterType() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferGenericFunctionParameterType2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferGenericFunctionParameterType2_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferGenericFunctionParameterType_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferGenericFunctionReturnType() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferGenericFunctionReturnType_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferGenericInstantiation() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferGenericMethodType() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferGenericMethodType_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_inferJSBuiltin() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_IterableAndFuture() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_nestedGenericInstantiation() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_usesGreatestLowerBound() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_usesGreatestLowerBound_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_genericMethods_usesGreatestLowerBound_comment_topLevel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_assignToIndex() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_assignToProperty() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_assignToProperty_custom() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_assignToRef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_binary_custom() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_binary_doubleDouble() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_binary_doubleInt() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_binary_intDouble() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_binary_intInt() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_conditional() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_prefixExpression() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_prefixExpression_custom() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_throw() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_typeCast() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_typedListLiteral() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_typedMapLiteral() : any {
        throw 'from mixin';
    }
    @Abstract
    test_infer_use_of_void() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferConstsTransitively() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferCorrectlyOnMultipleVariablesDeclaredTogether() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferedType_usesSyntheticFunctionType() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferedType_usesSyntheticFunctionType_functionTypedParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferedType_usesSyntheticFunctionType_namedParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferedType_usesSyntheticFunctionType_positionalParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferedType_usesSyntheticFunctionType_requiredParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferFromComplexExpressionsIfOuterMostValueIsPrecise() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferFromRhsOnlyIfItWontConflictWithOverriddenFields() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferFromRhsOnlyIfItWontConflictWithOverriddenFields2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferFromVariablesInCycleLibsWhenFlagIsOn() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferFromVariablesInCycleLibsWhenFlagIsOn2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferFromVariablesInNonCycleImportsWithFlag() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferFromVariablesInNonCycleImportsWithFlag2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferGenericMethodType_named() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferGenericMethodType_named_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferGenericMethodType_positional() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferGenericMethodType_positional2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferGenericMethodType_positional2_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferGenericMethodType_positional_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferGenericMethodType_required() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferGenericMethodType_required_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferListLiteralNestedInMapLiteral() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferLocalFunctionReturnType() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferParameterType_setter_fromField() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferParameterType_setter_fromSetter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferred_nonstatic_field_depends_on_static_field_complex() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferred_nonstatic_field_depends_on_toplevel_var_simple() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredInitializingFormalChecksDefaultValue() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_blockClosure_noArgs_noReturn() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_cascade() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_customBinaryOp() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_customBinaryOp_viaInterface() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_customIndexOp() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_customIndexOp_viaInterface() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_customUnaryOp() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_customUnaryOp_viaInterface() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_extractMethodTearOff() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_extractMethodTearOff_viaInterface() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_fromTopLevelExecutableTearoff() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_invokeMethod() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_invokeMethod_viaInterface() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_isEnum() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_isEnumValues() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_isTypedef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_isTypedef_parameterized() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_viaClosure_multipleLevelsOfNesting() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_viaClosure_typeDependsOnArgs() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_viaClosure_typeIndependentOfArgs_field() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferredType_viaClosure_typeIndependentOfArgs_topLevel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferReturnOfStatementLambda() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferStaticsTransitively() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferStaticsTransitively2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferStaticsTransitively3() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferStaticsWithMethodInvocations() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypeOnOverriddenFields2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypeOnOverriddenFields4() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypeOnVar() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypeOnVar2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypeOnVarFromField() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypeOnVarFromTopLevel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypeRegardlessOfDeclarationOrderOrCycles() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypesOnGenericInstantiations_3() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypesOnGenericInstantiations_4() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypesOnGenericInstantiations_5() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypesOnGenericInstantiations_infer() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypesOnGenericInstantiationsInLibraryCycle() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypesOnLoopIndices_forEachLoop() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferTypesOnLoopIndices_forLoopWithInference() : any {
        throw 'from mixin';
    }
    @Abstract
    test_inferVariableVoid() : any {
        throw 'from mixin';
    }
    @Abstract
    test_instantiateToBounds_generic2_hasBound_definedAfter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_instantiateToBounds_generic2_hasBound_definedBefore() : any {
        throw 'from mixin';
    }
    @Abstract
    test_instantiateToBounds_generic2_noBound() : any {
        throw 'from mixin';
    }
    @Abstract
    test_instantiateToBounds_generic_hasBound_definedAfter() : any {
        throw 'from mixin';
    }
    @Abstract
    test_instantiateToBounds_generic_hasBound_definedBefore() : any {
        throw 'from mixin';
    }
    @Abstract
    test_instantiateToBounds_invokeConstructor_noBound() : any {
        throw 'from mixin';
    }
    @Abstract
    test_instantiateToBounds_invokeConstructor_typeArgsExact() : any {
        throw 'from mixin';
    }
    @Abstract
    test_instantiateToBounds_notGeneric() : any {
        throw 'from mixin';
    }
    @Abstract
    test_lambdaDoesNotHavePropagatedTypeHint() : any {
        throw 'from mixin';
    }
    @Abstract
    test_listLiterals() : any {
        throw 'from mixin';
    }
    @Abstract
    test_listLiterals_topLevel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_listLiteralsCanInferNull_topLevel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_listLiteralsCanInferNullBottom() : any {
        throw 'from mixin';
    }
    @Abstract
    test_mapLiterals() : any {
        throw 'from mixin';
    }
    @Abstract
    test_mapLiterals_topLevel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_mapLiteralsCanInferNull() : any {
        throw 'from mixin';
    }
    @Abstract
    test_mapLiteralsCanInferNull_topLevel() : any {
        throw 'from mixin';
    }
    @Abstract
    test_methodCall_withTypeArguments_instanceMethod() : any {
        throw 'from mixin';
    }
    @Abstract
    test_methodCall_withTypeArguments_instanceMethod_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_methodCall_withTypeArguments_instanceMethod_identifierSequence() : any {
        throw 'from mixin';
    }
    @Abstract
    test_methodCall_withTypeArguments_instanceMethod_identifierSequence_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_methodCall_withTypeArguments_staticMethod() : any {
        throw 'from mixin';
    }
    @Abstract
    test_methodCall_withTypeArguments_staticMethod_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_methodCall_withTypeArguments_topLevelFunction() : any {
        throw 'from mixin';
    }
    @Abstract
    test_methodCall_withTypeArguments_topLevelFunction_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_noErrorWhenDeclaredTypeIsNumAndAssignedNull() : any {
        throw 'from mixin';
    }
    @Abstract
    test_nullCoalescingOperator() : any {
        throw 'from mixin';
    }
    @Abstract
    test_nullLiteralShouldNotInferAsBottom() : any {
        throw 'from mixin';
    }
    @Abstract
    test_propagateInferenceToFieldInClass() : any {
        throw 'from mixin';
    }
    @Abstract
    test_propagateInferenceToFieldInClassDynamicWarnings() : any {
        throw 'from mixin';
    }
    @Abstract
    test_propagateInferenceTransitively() : any {
        throw 'from mixin';
    }
    @Abstract
    test_propagateInferenceTransitively2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_referenceToTypedef() : any {
        throw 'from mixin';
    }
    @Abstract
    test_refineBinaryExpressionType_typeParameter_T_double() : any {
        throw 'from mixin';
    }
    @Abstract
    test_refineBinaryExpressionType_typeParameter_T_int() : any {
        throw 'from mixin';
    }
    @Abstract
    test_refineBinaryExpressionType_typeParameter_T_T() : any {
        throw 'from mixin';
    }
    @Abstract
    test_staticMethod_tearoff() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_closureCall() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_constructorCall_explicitDynamicParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_constructorCall_explicitTypeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_constructorCall_implicitTypeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_constructorCall_noTypeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr1() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr1_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr2_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitTypeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr1() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr1_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr2() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr2_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_implicitTypeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_implicitTypeParam_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_implicitTypeParam_viaExpr() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_implicitTypeParam_viaExpr_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_noTypeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_functionCall_noTypeParam_viaExpr() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_inList_dynamic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_inList_typed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_inList_untyped() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_inMap_dynamic() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_inMap_typed() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_inMap_untyped() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_methodCall_explicitDynamicParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_methodCall_explicitDynamicParam_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_methodCall_explicitTypeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_methodCall_explicitTypeParam_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_methodCall_implicitTypeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_methodCall_implicitTypeParam_comment() : any {
        throw 'from mixin';
    }
    @Abstract
    test_unsafeBlockClosureInference_methodCall_noTypeParam() : any {
        throw 'from mixin';
    }
    @Abstract
    test_voidReturnTypeSubtypesDynamic() : any {
        throw 'from mixin';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get mayCheckTypesOfLocals() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkFileElement(content : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unit : any = await this.checkFile(content);
            return (unit).element;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InferredTypeTest() {
    }
}

export namespace InferredTypeTest_Driver {
    export type Constructors = InferredTypeTest.Constructors | 'InferredTypeTest_Driver';
    export type Interface = Omit<InferredTypeTest_Driver, Constructors>;
}
@DartClass
export class InferredTypeTest_Driver extends InferredTypeTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hasExtraTaskModelPass() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_circularReference_viaClosures() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_circularReference_viaClosures();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_circularReference_viaClosures_initializerTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_circularReference_viaClosures_initializerTypes();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_listLiteralsCanInferNull_topLevel() {
        return super.test_listLiteralsCanInferNull_topLevel();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_mapLiteralsCanInferNull_topLevel() {
        return super.test_mapLiteralsCanInferNull_topLevel();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr2();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr2_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_unsafeBlockClosureInference_functionCall_explicitDynamicParam_viaExpr2_comment();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr2();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr2_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_unsafeBlockClosureInference_functionCall_explicitTypeParam_viaExpr2_comment();
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InferredTypeTest_Driver() {
    }
}

export class properties {
}