/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/correction/fix_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../abstract_single_unit";
import * as lib4 from "./flutter_util";
import * as lib5 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(FixProcessorTest);
        defineReflectiveTests(LintFixTest);
    });
};
export namespace BaseFixProcessorTest {
    export type Constructors = lib3.AbstractSingleUnitTest.Constructors | 'BaseFixProcessorTest';
    export type Interface = Omit<BaseFixProcessorTest, Constructors>;
}
@DartClass
export class BaseFixProcessorTest extends lib3.AbstractSingleUnitTest {
    errorFilter : (error : any) => boolean;

    myPkgLibPath : string;

    flutterPkgLibPath : string;

    fix : any;

    change : any;

    resultCode : string;

    assert_undefinedFunction_create_returnType_bool(lineWithTest : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit(`main() {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,`main() {
        } )());
    }

    assertHasFix(kind : any,expected : string,_namedArguments? : {target? : string}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {target} = Object.assign({
            }, _namedArguments );
            let error : any = await this._findErrorToFix();
            this.fix = await this._assertHasFix(kind,error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            if (target != null) {
                expect(target,fileEdits.first.file);
            }
            this.resultCode = SourceEdit.applySequence(this.testCode,op(Op.INDEX,this.change.edits,0).edits);
            expect(this.resultCode,expected);
        } )());
    }

    assertNoFix(kind : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let error : any = await this._findErrorToFix();
            let fixes : core.DartList<any> = await this._computeFixes(error);
            for(let fix of fixes) {
                if (op(Op.EQUALS,fix.kind,kind)) {
                    throw fail(`Unexpected fix ${kind} in\n${fixes.join('\n')}`);
                }
            }
        } )());
    }

    expectedPosition(search : string) : any {
        let offset : number = new core.DartString(this.resultCode).indexOf(search);
        return new bare.createInstance(any,null,this.testFile,offset);
    }
    expectedPositions(patterns : core.DartList<string>) : core.DartList<any> {
        let positions : core.DartList<any> = new core.DartList.literal<any>();
        patterns.forEach((search : string) =>  {
            positions.add(this.expectedPosition(search));
        });
        return positions;
    }
    expectedSuggestions(kind : any,values : core.DartList<string>) : core.DartList<any> {
        return values.map((value : any) =>  {
            return new bare.createInstance(any,null,value,kind);
        }).toList();
    }
    setUp() : void {
        super.setUp();
        this.verifyNoTestUnitErrors = false;
    }
    _assertHasFix(kind : any,error : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let fixes : core.DartList<any> = await this._computeFixes(error);
            for(let fix of fixes) {
                if (op(Op.EQUALS,fix.kind,kind)) {
                    return fix;
                }
            }
            throw fail(`Expected to find fix ${kind} in\n${fixes.join('\n')}`);
        } )());
    }

    _assertLinkedGroup(group : any,expectedStrings : core.DartList<string>,expectedSuggestions? : core.DartList<any>) : void {
        let expectedPositions : core.DartList<any> = this._findResultPositions(expectedStrings);
        expect(group.positions,unorderedEquals(expectedPositions));
        if (expectedSuggestions != null) {
            expect(group.suggestions,unorderedEquals(expectedSuggestions));
        }
    }
    _computeErrors() : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this.enableNewAnalysisDriver) {
                return (await this.driver.getResult(this.testFile)).errors;
            }else {
                return this.context.computeErrors(this.testSource);
            }
        } )());
    }

    _computeFixes(error : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let fixContext : any = new _DartFixContextImpl(this.provider,this.driver,new bare.createInstance(any,null,this.driver),this.testUnit,error);
            return await new bare.createInstance(any,null).internalComputeFixes(fixContext);
        } )());
    }

    _configureMyPkg(pathToCode : core.DartMap<string,string>) : void {
        pathToCode.forEach((path : any,code : any) =>  {
            this.provider.newFile(`${this.myPkgLibPath}/${path}`,code);
        });
        let myPkgFolder : any = this.provider.getResource(this.myPkgLibPath);
        let pkgResolver : any = new bare.createInstance(any,null,this.provider,new core.DartMap.literal([
            ['my_pkg',new core.DartList.literal(myPkgFolder)]]));
        let sourceFactory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.sdk),pkgResolver,this.resourceResolver));
        if (this.enableNewAnalysisDriver) {
            this.driver.configure({
                sourceFactory : sourceFactory});
        }else {
            this.context.sourceFactory = sourceFactory;
        }
        this.addSource('/tmp/other.dart',pathToCode.keys.map((path : any) =>  {
            return `import 'package:my_pkg/${path}';`;
        }).join('\n'));
    }
    _findErrorToFix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let errors : core.DartList<any> = await this._computeErrors();
            if (this.errorFilter != null) {
                errors = errors.where(this.errorFilter).toList();
            }
            expect(errors,hasLength(1));
            return errors[0];
        } )());
    }

    _findResultPositions(searchStrings : core.DartList<string>) : core.DartList<any> {
        let positions : core.DartList<any> = new core.DartList.literal<any>();
        for(let search of searchStrings) {
            let offset : number = new core.DartString(this.resultCode).indexOf(search);
            positions.add(new bare.createInstance(any,null,this.testFile,offset));
        }
        return positions;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BaseFixProcessorTest() {
        this.errorFilter = (error : any) =>  {
            return error.errorCode != HintCode.UNUSED_CATCH_CLAUSE && error.errorCode != HintCode.UNUSED_CATCH_STACK && error.errorCode != HintCode.UNUSED_ELEMENT && error.errorCode != HintCode.UNUSED_FIELD && error.errorCode != HintCode.UNUSED_LOCAL_VARIABLE;
        };
        this.myPkgLibPath = '/packages/my_pkg/lib';
        this.flutterPkgLibPath = '/packages/flutter/lib';
    }
}

export namespace _DartFixContextImpl {
    export type Constructors = '_DartFixContextImpl';
    export type Interface = Omit<_DartFixContextImpl, Constructors>;
}
@DartClass
@Implements(any)
export class _DartFixContextImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resourceProvider : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    analysisDriver : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    astProvider : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    unit : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    error : any;

    constructor(resourceProvider : any,analysisDriver : any,astProvider : any,unit : any,error : any) {
    }
    @defaultConstructor
    _DartFixContextImpl(resourceProvider : any,analysisDriver : any,astProvider : any,unit : any,error : any) {
        this.resourceProvider = resourceProvider;
        this.analysisDriver = analysisDriver;
        this.astProvider = astProvider;
        this.unit = unit;
        this.error = error;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get getTopLevelDeclarations() : any {
        return this.analysisDriver.getTopLevelNameDeclarations;
    }
}

export namespace FixProcessorTest {
    export type Constructors = BaseFixProcessorTest.Constructors | 'FixProcessorTest';
    export type Interface = Omit<FixProcessorTest, Constructors>;
}
@DartClass
export class FixProcessorTest extends BaseFixProcessorTest {
    test_addFieldFormalParameters_hasRequiredParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class Test {
            await this.assertHasFix(DartFixKind.ADD_FIELD_FORMAL_PARAMETERS,'class Test {
        } )());
    }

    test_addFieldFormalParameters_noParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class Test {
            await this.assertHasFix(DartFixKind.ADD_FIELD_FORMAL_PARAMETERS,'class Test {
        } )());
    }

    test_addFieldFormalParameters_noRequiredParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class Test {
            await this.assertHasFix(DartFixKind.ADD_FIELD_FORMAL_PARAMETERS,'class Test {
        } )());
    }

    test_addMissingParameter_function_positional_hasNamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('test({int a}) {}
            await this.assertNoFix(DartFixKind.ADD_MISSING_PARAMETER_POSITIONAL);
        } )());
    }

    test_addMissingParameter_function_positional_hasZero() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('test() {}
            await this.assertHasFix(DartFixKind.ADD_MISSING_PARAMETER_POSITIONAL,'test([int i]) {}
        } )());
    }

    test_addMissingParameter_function_required_hasNamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('test({int a}) {}
            await this.assertHasFix(DartFixKind.ADD_MISSING_PARAMETER_REQUIRED,'test(int i, {int a}) {}
        } )());
    }

    test_addMissingParameter_function_required_hasOne() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('test(int a) {}
            await this.assertHasFix(DartFixKind.ADD_MISSING_PARAMETER_REQUIRED,'test(int a, double d) {}
        } )());
    }

    test_addMissingParameter_function_required_hasZero() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('test() {}
            await this.assertHasFix(DartFixKind.ADD_MISSING_PARAMETER_REQUIRED,'test(int i) {}
        } )());
    }

    test_addMissingParameter_method_positional_hasOne() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.ADD_MISSING_PARAMETER_POSITIONAL,'class A {
        } )());
    }

    test_addMissingParameter_method_required_hasOne() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.ADD_MISSING_PARAMETER_REQUIRED,'class A {
        } )());
    }

    test_addMissingParameter_method_required_hasZero() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.ADD_MISSING_PARAMETER_REQUIRED,'class A {
        } )());
    }

    test_addMissingRequiredArg_cons_flutter_children() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addPackageSource('flutter','src/widgets/framework.dart',lib4.properties.flutter_framework_code);
            this._addMetaPackageSource();
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'package:flutter/src/widgets/framework.dart\';
                target : '/test.dart'});
        } )());
    }

    test_addMissingRequiredArg_cons_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            this.addSource('/libA.dart','library libA;
            await this.resolveTestUnit('import \'libA.dart\';
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'libA.dart\';
                target : '/test.dart'});
        } )());
    }

    test_addMissingRequiredArg_cons_single_closure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            this.addSource('/libA.dart','library libA;
            await this.resolveTestUnit('import \'libA.dart\';
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'libA.dart\';
                target : '/test.dart'});
        } )());
    }

    test_addMissingRequiredArg_cons_single_closure_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            this.addSource('/libA.dart','library libA;
            await this.resolveTestUnit('import \'libA.dart\';
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'libA.dart\';
                target : '/test.dart'});
        } )());
    }

    test_addMissingRequiredArg_cons_single_closure_3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            this.addSource('/libA.dart','library libA;
            await this.resolveTestUnit('import \'libA.dart\';
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'libA.dart\';
                target : '/test.dart'});
        } )());
    }

    test_addMissingRequiredArg_cons_single_closure_4() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            this.addSource('/libA.dart','library libA;
            await this.resolveTestUnit('import \'libA.dart\';
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'libA.dart\';
                target : '/test.dart'});
        } )());
    }

    test_addMissingRequiredArg_cons_single_list() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            this.addSource('/libA.dart','library libA;
            await this.resolveTestUnit('import \'libA.dart\';
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'libA.dart\';
                target : '/test.dart'});
        } )());
    }

    test_addMissingRequiredArg_multiple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            await this.resolveTestUnit('import \'package:meta/meta.dart\';
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'package:meta/meta.dart\';
        } )());
    }

    test_addMissingRequiredArg_multiple_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            await this.resolveTestUnit('import \'package:meta/meta.dart\';
            let errors : core.DartList<any> = await this._computeErrors();
            expect(errors,hasLength(2));
            let filteredErrors : core.DartList<any> = errors.where((e : any) =>  {
                return op(Op.EQUALS,e.message,"The parameter 'a' is required.");
            }).toList();
            expect(filteredErrors,hasLength(1));
            let fixes : core.DartList<any> = await this._computeFixes(filteredErrors.first);
            let filteredFixes : core.DartList<any> = fixes.where((fix : any) =>  {
                return op(Op.EQUALS,fix.change.message,"Add required argument 'a'");
            }).toList();
            expect(filteredFixes,hasLength(1));
            this.change = filteredFixes.first.change;
            this.resultCode = SourceEdit.applySequence(this.testCode,op(Op.INDEX,this.change.edits,0).edits);
            expect(this.resultCode,'import \'package:meta/meta.dart\';
        } )());
    }

    test_addMissingRequiredArg_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            await this.resolveTestUnit('import \'package:meta/meta.dart\';
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'package:meta/meta.dart\';
        } )());
    }

    test_addMissingRequiredArg_single_normal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            await this.resolveTestUnit('import \'package:meta/meta.dart\';
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'package:meta/meta.dart\';
        } )());
    }

    test_addMissingRequiredArg_single_with_details() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._addMetaPackageSource();
            await this.resolveTestUnit('import \'package:meta/meta.dart\';
            await this.assertHasFix(DartFixKind.ADD_MISSING_REQUIRED_ARGUMENT,'import \'package:meta/meta.dart\';
        } )());
    }

    test_addSync_asyncFor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\';
            await this.assertHasFix(DartFixKind.ADD_ASYNC,'import \'dart:async\';
        } )());
    }

    test_addSync_BAD_nullFunctionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('var F = await;
            await this.assertNoFix(DartFixKind.ADD_ASYNC);
        } )());
    }

    test_addSync_blockFunctionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('foo() {}
            let errors : core.DartList<any> = await this._computeErrors();
            expect(errors,hasLength(2));
            errors.sort((a : any,b : any) =>  {
                return a.message.compareTo(b.message);
            });
            {
                let error : any = errors[0];
                expect(error.message,"Expected to find ';'.");
                let fixes : core.DartList<any> = await this._computeFixes(error);
                expect(fixes,isEmpty);
            }
            {
                let error : any = errors[1];
                expect(error.message,startsWith("Undefined name 'await' in function"));
                let fixes : core.DartList<any> = await this._computeFixes(error);
                expect(fixes,hasLength(1));
                let fix : any = fixes[0];
                expect(fix.kind,DartFixKind.ADD_ASYNC);
                let fileEdits : core.DartList<any> = fix.change.edits;
                expect(fileEdits,hasLength(1));
                this.resultCode = SourceEdit.applySequence(this.testCode,fileEdits[0].edits);
                expect(this.resultCode,'foo() {}
            }
        } )());
    }

    test_addSync_expressionFunctionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticWarningCode.UNDEFINED_IDENTIFIER_AWAIT);
            };
            await this.resolveTestUnit('foo() {}
            await this.assertHasFix(DartFixKind.ADD_ASYNC,'foo() {}
        } )());
    }

    test_addSync_returnFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticWarningCode.UNDEFINED_IDENTIFIER_AWAIT);
            };
            await this.resolveTestUnit('foo() {}
            await this.assertHasFix(DartFixKind.ADD_ASYNC,'import \'dart:async\';
        } )());
    }

    test_addSync_returnFuture_alreadyFuture() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticWarningCode.UNDEFINED_IDENTIFIER_AWAIT);
            };
            await this.resolveTestUnit('import \'dart:async\';
            await this.assertHasFix(DartFixKind.ADD_ASYNC,'import \'dart:async\';
        } )());
    }

    test_addSync_returnFuture_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticWarningCode.UNDEFINED_IDENTIFIER_AWAIT);
            };
            await this.resolveTestUnit('foo() {}
            await this.assertHasFix(DartFixKind.ADD_ASYNC,'foo() {}
        } )());
    }

    test_addSync_returnFuture_noType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticWarningCode.UNDEFINED_IDENTIFIER_AWAIT);
            };
            await this.resolveTestUnit('foo() {}
            await this.assertHasFix(DartFixKind.ADD_ASYNC,'foo() {}
        } )());
    }

    test_boolean() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.REPLACE_BOOLEAN_WITH_BOOL,'main() {
        } )());
    }

    test_canBeNullAfterNullAware_chain() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(x) {
            await this.assertHasFix(DartFixKind.REPLACE_WITH_NULL_AWARE,'main(x) {
        } )());
    }

    test_canBeNullAfterNullAware_methodInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(x) {
            await this.assertHasFix(DartFixKind.REPLACE_WITH_NULL_AWARE,'main(x) {
        } )());
    }

    test_canBeNullAfterNullAware_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(x) {
            await this.assertHasFix(DartFixKind.REPLACE_WITH_NULL_AWARE,'main(x) {
        } )());
    }

    test_changeToStaticAccess_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CHANGE_TO_STATIC_ACCESS,'class A {
        } )());
    }

    test_changeToStaticAccess_method_importType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA;
            this.addSource('/libB.dart','library libB;
            await this.resolveTestUnit('import \'libB.dart\';
            await this.assertHasFix(DartFixKind.CHANGE_TO_STATIC_ACCESS,'import \'libA.dart\';
        } )());
    }

    test_changeToStaticAccess_method_prefixLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\' as pref;
            await this.assertHasFix(DartFixKind.CHANGE_TO_STATIC_ACCESS,'import \'dart:async\' as pref;
        } )());
    }

    test_changeToStaticAccess_property() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CHANGE_TO_STATIC_ACCESS,'class A {
        } )());
    }

    test_changeToStaticAccess_property_importType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA;
            this.addSource('/libB.dart','library libB;
            await this.resolveTestUnit('import \'libB.dart\';
            await this.assertHasFix(DartFixKind.CHANGE_TO_STATIC_ACCESS,'import \'libA.dart\';
        } )());
    }

    test_changeTypeAnnotation_BAD_multipleVariables() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoFix(DartFixKind.CHANGE_TYPE_ANNOTATION);
        } )());
    }

    test_changeTypeAnnotation_BAD_notVariableDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoFix(DartFixKind.CHANGE_TYPE_ANNOTATION);
        } )());
    }

    test_changeTypeAnnotation_OK_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CHANGE_TYPE_ANNOTATION,'main() {
        } )());
    }

    test_changeTypeAnnotation_OK_simple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CHANGE_TYPE_ANNOTATION,'main() {
        } )());
    }

    test_createClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_CLASS,'main() {
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('Test v =','Test {'));
        } )());
    }

    test_createClass_BAD_hasUnresolvedPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoFix(DartFixKind.CREATE_CLASS);
        } )());
    }

    test_createClass_inLibraryOfPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libCode : string = 'library my.lib;
            this.addSource('/lib.dart',libCode);
            await this.resolveTestUnit('import \'lib.dart\' as lib;
            let error : any = await this._findErrorToFix();
            this.fix = await this._assertHasFix(DartFixKind.CREATE_CLASS,error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            let fileEdit : any = op(Op.INDEX,this.change.edits,0);
            expect(fileEdit.file,'/lib.dart');
            expect(SourceEdit.applySequence(libCode,fileEdit.edits),'library my.lib;
            expect(this.change.linkedEditGroups,isEmpty);
        } )());
    }

    test_createClass_innerLocalFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('f() {
            await this.assertHasFix(DartFixKind.CREATE_CLASS,'f() {
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('Test v =','Test {'));
        } )());
    }

    test_createClass_itemOfList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_CLASS,'main() {
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('Test];','Test {'));
        } )());
    }

    test_createClass_itemOfList_inAnnotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticWarningCode.UNDEFINED_IDENTIFIER);
            };
            await this.resolveTestUnit('class MyAnnotation {
            await this.assertHasFix(DartFixKind.CREATE_CLASS,'class MyAnnotation {
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('Test])','Test {'));
        } )());
    }

    test_createConstructor_forFinalFields() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return error.message.contains("'a'");
            };
            await this.resolveTestUnit('class Test {
            await this.assertHasFix(DartFixKind.CREATE_CONSTRUCTOR_FOR_FINAL_FIELDS,'class Test {
        } )());
    }

    test_createConstructor_insteadOfSyntheticDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_CONSTRUCTOR,'class A {
        } )());
    }

    test_createConstructor_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_CONSTRUCTOR,'class A {
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('named(int ','named(1'));
        } )());
    }

    test_createConstructor_named_emptyClassBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {}
            await this.assertHasFix(DartFixKind.CREATE_CONSTRUCTOR,'class A {
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('named(int ','named(1'));
        } )());
    }

    test_createConstructorForFinalFields_inTopLevelMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoFix(DartFixKind.CREATE_CONSTRUCTOR_FOR_FINAL_FIELDS);
        } )());
    }

    test_createConstructorForFinalFields_topLevelField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('final int v;
            await this.assertNoFix(DartFixKind.CREATE_CONSTRUCTOR_FOR_FINAL_FIELDS);
        } )());
    }

    test_createConstructorSuperExplicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.ADD_SUPER_CONSTRUCTOR_INVOCATION,'class A {
        } )());
    }

    test_createConstructorSuperExplicit_hasInitializers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.ADD_SUPER_CONSTRUCTOR_INVOCATION,'class A {
        } )());
    }

    test_createConstructorSuperExplicit_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.ADD_SUPER_CONSTRUCTOR_INVOCATION,'class A {
        } )());
    }

    test_createConstructorSuperExplicit_named_private() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertNoFix(DartFixKind.ADD_SUPER_CONSTRUCTOR_INVOCATION);
        } )());
    }

    test_createConstructorSuperExplicit_typeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A<T> {
            await this.assertHasFix(DartFixKind.ADD_SUPER_CONSTRUCTOR_INVOCATION,'class A<T> {
        } )());
    }

    test_createConstructorSuperImplicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_CONSTRUCTOR_SUPER,'class A {
        } )());
    }

    test_createConstructorSuperImplicit_fieldInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_CONSTRUCTOR_SUPER,'class A {
        } )());
    }

    test_createConstructorSuperImplicit_importType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA;
            this.addSource('/libB.dart','library libB;
            await this.resolveTestUnit('import \'libB.dart\';
            await this.assertHasFix(DartFixKind.CREATE_CONSTRUCTOR_SUPER,'import \'libA.dart\';
        } )());
    }

    test_createConstructorSuperImplicit_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_CONSTRUCTOR_SUPER,'class A {
        } )());
    }

    test_createConstructorSuperImplicit_private() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertNoFix(DartFixKind.CREATE_CONSTRUCTOR_SUPER);
        } )());
    }

    test_createConstructorSuperImplicit_typeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C<T> {
            await this.assertHasFix(DartFixKind.CREATE_CONSTRUCTOR_SUPER,'class C<T> {
        } )());
    }

    test_createField_BAD_inEnum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('enum MyEnum {
            await this.assertNoFix(DartFixKind.CREATE_FIELD);
        } )());
    }

    test_createField_BAD_inSDK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List p) {
            await this.assertNoFix(DartFixKind.CREATE_FIELD);
        } )());
    }

    test_createField_getter_multiLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {
        } )());
    }

    test_createField_getter_qualified_instance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {
        } )());
    }

    test_createField_getter_qualified_instance_dynamicType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {
        } )());
    }

    test_createField_getter_qualified_propagatedType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {
        } )());
    }

    test_createField_getter_unqualified_instance_asInvocationArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {
        } )());
    }

    test_createField_getter_unqualified_instance_assignmentRhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {
        } )());
    }

    test_createField_getter_unqualified_instance_asStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {
        } )());
    }

    test_createField_hint() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {
        } )());
    }

    test_createField_hint_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {
        } )());
    }

    test_createField_importType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA;
            this.addSource('/libB.dart','library libB;
            await this.resolveTestUnit('import \'libB.dart\';
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'import \'libA.dart\';
        } )());
    }

    test_createField_setter_generic_BAD() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {
        } )());
    }

    test_createField_setter_generic_OK_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A<T> {
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A<T> {
        } )());
    }

    test_createField_setter_qualified_instance_hasField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {
        } )());
    }

    test_createField_setter_qualified_instance_hasMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {
        } )());
    }

    test_createField_setter_qualified_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {
        } )());
    }

    test_createField_setter_unqualified_instance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {
        } )());
    }

    test_createField_setter_unqualified_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_FIELD,'class A {
        } )());
    }

    test_createFile_forImport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/my/project/bin/test.dart';
            await this.resolveTestUnit('import \'my_file.dart\';
            let error : any = await this._findErrorToFix();
            this.fix = await this._assertHasFix(DartFixKind.CREATE_FILE,error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            let fileEdit : any = op(Op.INDEX,this.change.edits,0);
            expect(fileEdit.file,'/my/project/bin/my_file.dart');
            expect(fileEdit.fileStamp,-1);
            expect(fileEdit.edits,hasLength(1));
            expect(op(Op.INDEX,fileEdit.edits,0).replacement,contains('library my_file;'));
        } )());
    }

    test_createFile_forImport_BAD_inPackage_lib_justLib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.provider.newFile('/projects/my_package/pubspec.yaml','name: my_package');
            this.testFile = '/projects/my_package/test.dart';
            await this.resolveTestUnit('import \'lib\';
            await this.assertNoFix(DartFixKind.CREATE_FILE);
        } )());
    }

    test_createFile_forImport_BAD_notDart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/my/project/bin/test.dart';
            await this.resolveTestUnit('import \'my_file.txt\';
            await this.assertNoFix(DartFixKind.CREATE_FILE);
        } )());
    }

    test_createFile_forImport_inPackage_lib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.provider.newFile('/projects/my_package/pubspec.yaml','name: my_package');
            this.testFile = '/projects/my_package/lib/test.dart';
            this.provider.newFolder('/projects/my_package/lib');
            await this.resolveTestUnit('import \'a/bb/c_cc/my_lib.dart\';
            let error : any = await this._findErrorToFix();
            this.fix = await this._assertHasFix(DartFixKind.CREATE_FILE,error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            let fileEdit : any = op(Op.INDEX,this.change.edits,0);
            expect(fileEdit.file,'/projects/my_package/lib/a/bb/c_cc/my_lib.dart');
            expect(fileEdit.fileStamp,-1);
            expect(fileEdit.edits,hasLength(1));
            expect(op(Op.INDEX,fileEdit.edits,0).replacement,contains('library my_package.a.bb.c_cc.my_lib;'));
        } )());
    }

    test_createFile_forImport_inPackage_test() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.provider.newFile('/projects/my_package/pubspec.yaml','name: my_package');
            this.testFile = '/projects/my_package/test/misc/test_all.dart';
            await this.resolveTestUnit('import \'a/bb/my_lib.dart\';
            let error : any = await this._findErrorToFix();
            this.fix = await this._assertHasFix(DartFixKind.CREATE_FILE,error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            let fileEdit : any = op(Op.INDEX,this.change.edits,0);
            expect(fileEdit.file,'/projects/my_package/test/misc/a/bb/my_lib.dart');
            expect(fileEdit.fileStamp,-1);
            expect(fileEdit.edits,hasLength(1));
            expect(op(Op.INDEX,fileEdit.edits,0).replacement,contains('library my_package.test.misc.a.bb.my_lib;'));
        } )());
    }

    test_createFile_forPart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/my/project/bin/test.dart';
            await this.resolveTestUnit('library my.lib;
            let error : any = await this._findErrorToFix();
            this.fix = await this._assertHasFix(DartFixKind.CREATE_FILE,error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            let fileEdit : any = op(Op.INDEX,this.change.edits,0);
            expect(fileEdit.file,'/my/project/bin/my_part.dart');
            expect(fileEdit.fileStamp,-1);
            expect(fileEdit.edits,hasLength(1));
            expect(op(Op.INDEX,fileEdit.edits,0).replacement,contains('part of my.lib;'));
        } )());
    }

    test_createFile_forPart_inPackageLib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.provider.newFile('/my/pubspec.yaml','name: my_test
            this.testFile = '/my/lib/test.dart';
            this.addTestSource('library my.lib;
            let pkgResolver : any = new bare.createInstance(any,null,this.provider,new core.DartMap.literal([
                ['my',new core.DartList.literal<any>(this.provider.getResource('/my/lib'))]]));
            let sourceFactory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.sdk),pkgResolver,this.resourceResolver));
            if (this.enableNewAnalysisDriver) {
                this.driver.configure({
                    sourceFactory : sourceFactory});
                this.testUnit = (await this.driver.getResult(this.testFile)).unit;
            }else {
                this.context.sourceFactory = sourceFactory;
                this.testUnit = await this.resolveLibraryUnit(this.testSource);
            }
            let error : any = await this._findErrorToFix();
            this.fix = await this._assertHasFix(DartFixKind.CREATE_FILE,error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            let fileEdit : any = op(Op.INDEX,this.change.edits,0);
            expect(fileEdit.file,'/my/lib/my_part.dart');
            expect(fileEdit.fileStamp,-1);
            expect(fileEdit.edits,hasLength(1));
            expect(op(Op.INDEX,fileEdit.edits,0).replacement,contains('part of my.lib;'));
        } )());
    }

    test_createGetter_BAD_inSDK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(List p) {
            await this.assertNoFix(DartFixKind.CREATE_GETTER);
        } )());
    }

    test_createGetter_hint_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_GETTER,'class A {
        } )());
    }

    test_createGetter_location_afterLastGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_GETTER,'class A {
        } )());
    }

    test_createGetter_multiLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_GETTER,'class A {
        } )());
    }

    test_createGetter_qualified_instance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_GETTER,'class A {
        } )());
    }

    test_createGetter_qualified_instance_dynamicType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_GETTER,'class A {
        } )());
    }

    test_createGetter_qualified_propagatedType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_GETTER,'class A {
        } )());
    }

    test_createGetter_setterContext() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertNoFix(DartFixKind.CREATE_GETTER);
        } )());
    }

    test_createGetter_unqualified_instance_asInvocationArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_GETTER,'class A {
        } )());
    }

    test_createGetter_unqualified_instance_assignmentLhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertNoFix(DartFixKind.CREATE_GETTER);
        } )());
    }

    test_createGetter_unqualified_instance_assignmentRhs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_GETTER,'class A {
        } )());
    }

    test_createGetter_unqualified_instance_asStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_GETTER,'class A {
        } )());
    }

    test_createLocalVariable_functionType_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('typedef MY_FUNCTION(int p);
            await this.assertHasFix(DartFixKind.CREATE_LOCAL_VARIABLE,'typedef MY_FUNCTION(int p);
        } )());
    }

    test_createLocalVariable_functionType_synthetic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('foo(f(int p)) {}
            await this.assertNoFix(DartFixKind.CREATE_LOCAL_VARIABLE);
        } )());
    }

    test_createLocalVariable_read_typeAssignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_LOCAL_VARIABLE,'main() {
        } )());
    }

    test_createLocalVariable_read_typeCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_LOCAL_VARIABLE,'main() {
        } )());
    }

    test_createLocalVariable_read_typeInvocationArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_LOCAL_VARIABLE,'main() {
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('String test;'));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,1),new core.DartList.literal('test;','test);'));
        } )());
    }

    test_createLocalVariable_read_typeInvocationTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_LOCAL_VARIABLE,'main() {
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('test;','test.add('));
        } )());
    }

    test_createLocalVariable_write_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_LOCAL_VARIABLE,'main() {
        } )());
    }

    test_createLocalVariable_write_assignment_compound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_LOCAL_VARIABLE,'main() {
        } )());
    }

    test_createMissingMethodCall() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C implements Function {
            await this.assertHasFix(DartFixKind.CREATE_MISSING_METHOD_CALL,'class C implements Function {
        } )());
    }

    test_createMissingOverrides_field_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'class A {
        } )());
    }

    test_createMissingOverrides_functionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('typedef int Binary(int left, int right);
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'typedef int Binary(int left, int right);
        } )());
    }

    test_createMissingOverrides_functionTypedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class A {
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'abstract class A {
        } )());
    }

    test_createMissingOverrides_generics_typeArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class Iterator<T> {
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'class Iterator<T> {
        } )());
    }

    test_createMissingOverrides_generics_typeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class ItemProvider<T> {
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'abstract class ItemProvider<T> {
        } )());
    }

    test_createMissingOverrides_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class A {
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'abstract class A {
        } )());
    }

    test_createMissingOverrides_importPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\' as aaa;
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'import \'dart:async\' as aaa;
        } )());
    }

    test_createMissingOverrides_mergeToField_getterSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'class A {
        } )());
    }

    test_createMissingOverrides_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class A {
            let expectedCode : string = 'abstract class A {
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,expectedCode);
            {
                let endPosition : any = this.change.selection;
                expect(endPosition,isNotNull);
                expect(endPosition.file,this.testFile);
                let endOffset : number = endPosition.offset;
                let endString : string = new core.DartString(expectedCode).substring(endOffset,endOffset + 25);
                expect(endString,contains('m1'));
                expect(endString,isNot(contains('m2')));
                expect(endString,isNot(contains('m3')));
                expect(endString,isNot(contains('m4')));
                expect(endString,isNot(contains('m5')));
                expect(endString,isNot(contains('m6')));
            }
        } )());
    }

    test_createMissingOverrides_method_emptyClassBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class A {
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'abstract class A {
        } )());
    }

    test_createMissingOverrides_method_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C<T> {}
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'class C<T> {}
        } )());
    }

    test_createMissingOverrides_operator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class A {
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'abstract class A {
        } )());
    }

    test_createMissingOverrides_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class A {
            await this.assertHasFix(DartFixKind.CREATE_MISSING_OVERRIDES,'abstract class A {
        } )());
    }

    test_createNoSuchMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class A {
            await this.assertHasFix(DartFixKind.CREATE_NO_SUCH_METHOD,'abstract class A {
        } )());
    }

    test_creationFunction_forFunctionType_cascadeSecond() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'class A {
        } )());
    }

    test_creationFunction_forFunctionType_coreFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {
        } )());
    }

    test_creationFunction_forFunctionType_dynamicArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {
        } )());
    }

    test_creationFunction_forFunctionType_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {
        } )());
    }

    test_creationFunction_forFunctionType_function_namedArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {
        } )());
    }

    test_creationFunction_forFunctionType_importType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/libA.dart','library libA;
            this.addSource('/libB.dart','library libB;
            await this.resolveTestUnit('import \'libB.dart\';
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'import \'libA.dart\';
        } )());
    }

    test_creationFunction_forFunctionType_method_enclosingClass_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {
        } )());
    }

    test_creationFunction_forFunctionType_method_enclosingClass_static2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {
        } )());
    }

    test_creationFunction_forFunctionType_method_targetClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(A a) {
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'main(A a) {
        } )());
    }

    test_creationFunction_forFunctionType_method_targetClass_hasOtherMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(A a) {
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'main(A a) {
        } )());
    }

    test_creationFunction_forFunctionType_notFunctionType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(A a) {
            await this.assertNoFix(DartFixKind.CREATE_METHOD);
            await this.assertNoFix(DartFixKind.CREATE_FUNCTION);
        } )());
    }

    test_creationFunction_forFunctionType_unknownTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(A a) {
            await this.assertNoFix(DartFixKind.CREATE_METHOD);
        } )());
    }

    test_expectedToken_semicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.INSERT_SEMICOLON,'main() {
        } )());
    }

    test_illegalAsyncReturnType_adjacentNodes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE);
            };
            await this.resolveTestUnit('import \'dart:async\';
            await this.assertHasFix(DartFixKind.REPLACE_RETURN_TYPE_FUTURE,'import \'dart:async\';
        } )());
    }

    test_illegalAsyncReturnType_asyncLibrary_import() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE);
            };
            await this.resolveTestUnit('library main;
            await this.assertHasFix(DartFixKind.REPLACE_RETURN_TYPE_FUTURE,'library main;
        } )());
    }

    test_illegalAsyncReturnType_asyncLibrary_usePrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE);
            };
            await this.resolveTestUnit('import \'dart:async\' as al;
            await this.assertHasFix(DartFixKind.REPLACE_RETURN_TYPE_FUTURE,'import \'dart:async\' as al;
        } )());
    }

    test_illegalAsyncReturnType_complexTypeName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE);
            };
            await this.resolveTestUnit('import \'dart:async\';
            await this.assertHasFix(DartFixKind.REPLACE_RETURN_TYPE_FUTURE,'import \'dart:async\';
        } )());
    }

    test_illegalAsyncReturnType_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticTypeWarningCode.ILLEGAL_ASYNC_RETURN_TYPE);
            };
            await this.resolveTestUnit('import \'dart:async\';
            await this.assertHasFix(DartFixKind.REPLACE_RETURN_TYPE_FUTURE,'import \'dart:async\';
        } )());
    }

    test_importLibraryPackage_preferDirectOverExport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureMyPkg(new core.DartMap.literal([
                ['b.dart','class Test {}'],
                ['a.dart',"export 'b.dart';"]]));
            await this.resolveTestUnit('main() {
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'package:my_pkg/b.dart\';
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT2,'import \'package:my_pkg/a.dart\';
        } )());
    }

    test_importLibraryPackage_preferDirectOverExport_src() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.myPkgLibPath = '/my/src/packages/my_pkg/lib';
            this._configureMyPkg(new core.DartMap.literal([
                ['b.dart','class Test {}'],
                ['a.dart',"export 'b.dart';"]]));
            await this.resolveTestUnit('main() {
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'package:my_pkg/b.dart\';
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT2,'import \'package:my_pkg/a.dart\';
        } )());
    }

    test_importLibraryPackage_preferPublicOverPrivate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureMyPkg(new core.DartMap.literal([
                ['src/a.dart','class Test {}'],
                ['b.dart',"export 'src/a.dart';"]]));
            await this.resolveTestUnit('main() {
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT2,'import \'package:my_pkg/b.dart\';
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT3,'import \'package:my_pkg/src/a.dart\';
        } )());
    }

    test_importLibraryProject_BAD_notInLib_BUILD() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/aaa/bin/test.dart';
            this.provider.newFile('/aaa/BUILD','');
            this.provider.newFile('/bbb/BUILD','');
            this.addSource('/bbb/test/lib.dart','class Test {}');
            await this.resolveTestUnit('main() {
            this.performAllAnalysisTasks();
            await this.assertNoFix(DartFixKind.IMPORT_LIBRARY_PROJECT1);
        } )());
    }

    test_importLibraryProject_BAD_notInLib_pubspec() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/aaa/bin/test.dart';
            this.provider.newFile('/aaa/pubspec.yaml','name: aaa');
            this.provider.newFile('/bbb/pubspec.yaml','name: bbb');
            this.addSource('/bbb/test/lib.dart','class Test {}');
            await this.resolveTestUnit('main() {
            this.performAllAnalysisTasks();
            await this.assertNoFix(DartFixKind.IMPORT_LIBRARY_PROJECT1);
        } )());
    }

    test_importLibraryProject_withClass_annotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','library lib;
            await this.resolveTestUnit('@Test(0)
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'lib.dart\';
        } )());
    }

    test_importLibraryProject_withClass_constInstanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','class Test {
            await this.resolveTestUnit('main() {
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'lib.dart\';
        } )());
    }

    test_importLibraryProject_withClass_hasOtherLibraryWithPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/project/bin/test.dart';
            this.addSource('/project/bin/a.dart','library a;
            this.addSource('/project/bin/b.dart','library b;
            await this.resolveTestUnit('import \'b.dart\' show Two;
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'a.dart\';
        } )());
    }

    test_importLibraryProject_withClass_inParentFolder() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/project/bin/test.dart';
            this.addSource('/project/lib.dart','library lib;
            await this.resolveTestUnit('main() {
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'../lib.dart\';
        } )());
    }

    test_importLibraryProject_withClass_inRelativeFolder() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/project/bin/test.dart';
            this.addSource('/project/lib/sub/folder/lib.dart','library lib;
            await this.resolveTestUnit('main() {
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'../lib/sub/folder/lib.dart\';
        } )());
    }

    test_importLibraryProject_withClass_inSameFolder() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/project/bin/test.dart';
            this.addSource('/project/bin/lib.dart','library lib;
            await this.resolveTestUnit('main() {
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'lib.dart\';
        } )());
    }

    test_importLibraryProject_withFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','library lib;
            await this.resolveTestUnit('main() {
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'lib.dart\';
        } )());
    }

    test_importLibraryProject_withFunction_unresolvedMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','library lib;
            await this.resolveTestUnit('class A {
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'lib.dart\';
        } )());
    }

    test_importLibraryProject_withFunctionTypeAlias() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/project/bin/test.dart';
            this.addSource('/project/bin/lib.dart','library lib;
            await this.resolveTestUnit('main() {
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'lib.dart\';
        } )());
    }

    test_importLibraryProject_withTopLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','library lib;
            await this.resolveTestUnit('main() {
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PROJECT1,'import \'lib.dart\';
        } )());
    }

    test_importLibrarySdk_withClass_AsExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:async\';
        } )());
    }

    test_importLibrarySdk_withClass_invocationTarget() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:async\';
        } )());
    }

    test_importLibrarySdk_withClass_IsExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:async\';
        } )());
    }

    test_importLibrarySdk_withClass_itemOfList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:async\';
        } )());
    }

    test_importLibrarySdk_withClass_itemOfList_inAnnotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,StaticWarningCode.UNDEFINED_IDENTIFIER);
            };
            await this.resolveTestUnit('class MyAnnotation {
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:async\';
        } )());
    }

    test_importLibrarySdk_withClass_typeAnnotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:async\';
        } )());
    }

    test_importLibrarySdk_withClass_typeAnnotation_PrefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:async\';
        } )());
    }

    test_importLibrarySdk_withClass_typeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:async\';
        } )());
    }

    test_importLibrarySdk_withTopLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:math\';
        } )());
    }

    test_importLibrarySdk_withTopLevelVariable_annotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('@PI
            this.performAllAnalysisTasks();
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SDK,'import \'dart:math\';
        } )());
    }

    test_importLibraryShow_project() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.testFile = '/project/bin/test.dart';
            this.addSource('/project/bin/lib.dart','class A {}
            await this.resolveTestUnit('import \'lib.dart\' show A;
            this.performAllAnalysisTasks();
            await this.assertNoFix(DartFixKind.IMPORT_LIBRARY_PROJECT1);
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SHOW,'import \'lib.dart\' show A, B;
        } )());
    }

    test_importLibraryShow_sdk() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\' show Stream;
            await this.assertNoFix(DartFixKind.IMPORT_LIBRARY_SDK);
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_SHOW,'import \'dart:async\' show Future, Stream;
        } )());
    }

    test_isNotNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertHasFix(DartFixKind.USE_NOT_EQ_NULL,'main(p) {
        } )());
    }

    test_isNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            await this.assertHasFix(DartFixKind.USE_EQ_EQ_NULL,'main(p) {
        } )());
    }

    test_makeEnclosingClassAbstract_declaresAbstractMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.MAKE_CLASS_ABSTRACT,'abstract class A {
        } )());
    }

    test_makeEnclosingClassAbstract_inheritsAbstractMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('abstract class A {
            await this.assertHasFix(DartFixKind.MAKE_CLASS_ABSTRACT,'abstract class A {
        } )());
    }

    test_makeFieldNotFinal_hasType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.MAKE_FIELD_NOT_FINAL,'class A {
        } )());
    }

    test_makeFieldNotFinal_noType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.MAKE_FIELD_NOT_FINAL,'class A {
        } )());
    }

    test_noException_1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {
            let errors : core.DartList<any> = await this._computeErrors();
            for(let error of errors) {
                await this._computeFixes(error);
            }
        } )());
    }

    test_nonBoolCondition_addNotNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(String p) {
            await this.assertHasFix(DartFixKind.ADD_NE_NULL,'main(String p) {
        } )());
    }

    test_removeDeadCode_condition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(int p) {
            await this.assertHasFix(DartFixKind.REMOVE_DEAD_CODE,'main(int p) {
        } )());
    }

    test_removeDeadCode_statements_one() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('int main() {
            await this.assertHasFix(DartFixKind.REMOVE_DEAD_CODE,'int main() {
        } )());
    }

    test_removeDeadCode_statements_two() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('int main() {
            await this.assertHasFix(DartFixKind.REMOVE_DEAD_CODE,'int main() {
        } )());
    }

    test_removeParentheses_inGetterDeclaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.REMOVE_PARAMETERS_IN_GETTER_DECLARATION,'class A {
        } )());
    }

    test_removeParentheses_inGetterInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.REMOVE_PARENTHESIS_IN_GETTER_INVOCATION,'class A {
        } )());
    }

    test_removeUnnecessaryCast_assignment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(Object p) {
            await this.assertHasFix(DartFixKind.REMOVE_UNNECESSARY_CAST,'main(Object p) {
        } )());
    }

    test_removeUnusedCatchClause() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return true;
            };
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.REMOVE_UNUSED_CATCH_CLAUSE,'main() {
        } )());
    }

    test_removeUnusedCatchStack() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return true;
            };
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.REMOVE_UNUSED_CATCH_STACK,'main() {
        } )());
    }

    test_removeUnusedImport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:math\';
            await this.assertHasFix(DartFixKind.REMOVE_UNUSED_IMPORT,'main() {
        } )());
    }

    test_removeUnusedImport_anotherImportOnLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:math\'; import \'dart:async\';
            await this.assertHasFix(DartFixKind.REMOVE_UNUSED_IMPORT,'import \'dart:async\';
        } )());
    }

    test_removeUnusedImport_severalLines() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import
            await this.assertHasFix(DartFixKind.REMOVE_UNUSED_IMPORT,'main() {
        } )());
    }

    test_replaceVarWithDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.errorFilter = (error : any) =>  {
                return op(Op.EQUALS,error.errorCode,ParserErrorCode.VAR_AS_TYPE_NAME);
            };
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.REPLACE_VAR_WITH_DYNAMIC,'class A {
        } )());
    }

    test_replaceWithConstInstanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.USE_CONST,'class A {
        } )());
    }

    test_undefinedClass_useSimilar_BAD_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\' as c;
            await this.assertHasFix(DartFixKind.CHANGE_TO,'import \'dart:async\' as c;
        } )());
    }

    test_undefinedClass_useSimilar_fromImport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CHANGE_TO,'main() {
        } )());
    }

    test_undefinedClass_useSimilar_fromThisLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class MyClass {}
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class MyClass {}
        } )());
    }

    test_undefinedFunction_create_bottomArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {
        } )());
    }

    test_undefinedFunction_create_duplicateArgumentNames() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'class C {
        } )());
    }

    test_undefinedFunction_create_dynamicArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {
        } )());
    }

    test_undefinedFunction_create_dynamicReturnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {
        } )());
    }

    test_undefinedFunction_create_fromFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {
        } )());
    }

    test_undefinedFunction_create_fromMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'class A {
        } )());
    }

    test_undefinedFunction_create_generic_BAD() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A<T> {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'class A<T> {
        } )());
    }

    test_undefinedFunction_create_generic_OK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'class A {
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,2),new core.DartList.literal('List<int> items) {'),this.expectedSuggestions(LinkedEditSuggestionKind.TYPE,new core.DartList.literal('List<int>','Iterable<int>','Object')));
        } )());
    }

    test_undefinedFunction_create_importType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addSource('/lib.dart','library lib;
            await this.resolveTestUnit('import \'lib.dart\';
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'import \'dart:async\';
        } )());
    }

    test_undefinedFunction_create_nullArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {
        } )());
    }

    test_undefinedFunction_create_returnType_bool_expressions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assert_undefinedFunction_create_returnType_bool("!test();");
            await this.assert_undefinedFunction_create_returnType_bool("b && test();");
            await this.assert_undefinedFunction_create_returnType_bool("test() && b;");
            await this.assert_undefinedFunction_create_returnType_bool("b || test();");
            await this.assert_undefinedFunction_create_returnType_bool("test() || b;");
        } )());
    }

    test_undefinedFunction_create_returnType_bool_statements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.assert_undefinedFunction_create_returnType_bool("assert ( test() );");
            await this.assert_undefinedFunction_create_returnType_bool("if ( test() ) {}");
            await this.assert_undefinedFunction_create_returnType_bool("while ( test() ) {}");
            await this.assert_undefinedFunction_create_returnType_bool("do {} while ( test() );");
        } )());
    }

    test_undefinedFunction_create_returnType_fromAssignment_eq() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {
        } )());
    }

    test_undefinedFunction_create_returnType_fromAssignment_plusEq() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {
        } )());
    }

    test_undefinedFunction_create_returnType_fromBinary_right() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {
        } )());
    }

    test_undefinedFunction_create_returnType_fromInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {
        } )());
    }

    test_undefinedFunction_create_returnType_fromInvocationArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('foo(int p) {}
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'foo(int p) {}
        } )());
    }

    test_undefinedFunction_create_returnType_fromReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('int main() {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'int main() {
        } )());
    }

    test_undefinedFunction_create_returnType_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CREATE_FUNCTION,'main() {
        } )());
    }

    test_undefinedFunction_useSimilar_fromImport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.CHANGE_TO,'main() {
        } )());
    }

    test_undefinedFunction_useSimilar_prefixed_fromImport() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:core\' as c;
            await this.assertHasFix(DartFixKind.CHANGE_TO,'import \'dart:core\' as c;
        } )());
    }

    test_undefinedFunction_useSimilar_prefixed_ignoreLocal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\' as c;
            await this.assertNoFix(DartFixKind.CHANGE_TO);
        } )());
    }

    test_undefinedFunction_useSimilar_thisLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('myFunction() {}
            await this.assertHasFix(DartFixKind.CHANGE_TO,'myFunction() {}
        } )());
    }

    test_undefinedGetter_useSimilar_hint() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {
        } )());
    }

    test_undefinedGetter_useSimilar_qualified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {
        } )());
    }

    test_undefinedGetter_useSimilar_qualified_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {
        } )());
    }

    test_undefinedGetter_useSimilar_unqualified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {
        } )());
    }

    test_undefinedMethod_create_BAD_inSDK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoFix(DartFixKind.CREATE_METHOD);
        } )());
    }

    test_undefinedMethod_create_BAD_targetIsEnum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('enum MyEnum {A, B}
            await this.assertNoFix(DartFixKind.CREATE_METHOD);
        } )());
    }

    test_undefinedMethod_create_generic_BAD_argumentType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A<T> {
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A<T> {
        } )());
    }

    test_undefinedMethod_create_generic_BAD_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A<T> {
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A<T> {
        } )());
    }

    test_undefinedMethod_create_generic_OK_literal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {
        } )());
    }

    test_undefinedMethod_create_generic_OK_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A<T> {
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A<T> {
        } )());
    }

    test_undefinedMethod_createQualified_emptyClassBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {}
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {
        } )());
    }

    test_undefinedMethod_createQualified_fromClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {
        } )());
    }

    test_undefinedMethod_createQualified_fromClass_hasOtherMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {
        } )());
    }

    test_undefinedMethod_createQualified_fromInstance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {
        } )());
    }

    test_undefinedMethod_createQualified_targetIsFunctionType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('typedef A();
            await this.assertNoFix(DartFixKind.CREATE_METHOD);
        } )());
    }

    test_undefinedMethod_createQualified_targetIsUnresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertNoFix(DartFixKind.CREATE_METHOD);
        } )());
    }

    test_undefinedMethod_createUnqualified_duplicateArgumentNames() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class C {
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class C {
        } )());
    }

    test_undefinedMethod_createUnqualified_parameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {
            let index : number = 0;
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('void myUndefinedMethod('));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('myUndefinedMethod(0','myUndefinedMethod(int'));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('int i'),this.expectedSuggestions(LinkedEditSuggestionKind.TYPE,new core.DartList.literal('int','num','Object','Comparable<num>')));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('i,'));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('double d'),this.expectedSuggestions(LinkedEditSuggestionKind.TYPE,new core.DartList.literal('double','num','Object','Comparable<num>')));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('d,'));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('String s'),this.expectedSuggestions(LinkedEditSuggestionKind.TYPE,new core.DartList.literal('String','Object','Comparable<String>')));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('s)'));
        } )());
    }

    test_undefinedMethod_createUnqualified_parameters_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {
            let index : number = 0;
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('void myUndefinedMethod('));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('myUndefinedMethod(0','myUndefinedMethod(int'));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('int i'),this.expectedSuggestions(LinkedEditSuggestionKind.TYPE,new core.DartList.literal('int','num','Object','Comparable<num>')));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('i,'));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('double bbb'),this.expectedSuggestions(LinkedEditSuggestionKind.TYPE,new core.DartList.literal('double','num','Object','Comparable<num>')));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,index++),new core.DartList.literal('String ccc'),this.expectedSuggestions(LinkedEditSuggestionKind.TYPE,new core.DartList.literal('String','Object','Comparable<String>')));
        } )());
    }

    test_undefinedMethod_createUnqualified_returnType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,0),new core.DartList.literal('int myUndefinedMethod('));
            this._assertLinkedGroup(op(Op.INDEX,this.change.linkedEditGroups,1),new core.DartList.literal('myUndefinedMethod();','myUndefinedMethod() {'));
        } )());
    }

    test_undefinedMethod_createUnqualified_staticFromField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {
        } )());
    }

    test_undefinedMethod_createUnqualified_staticFromMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {
        } )());
    }

    test_undefinedMethod_hint_createQualified_fromInstance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CREATE_METHOD,'class A {
        } )());
    }

    test_undefinedMethod_parameterType_differentPrefixInTargetUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code2 : string = 'library test2;
            this.addSource('/test2.dart',code2);
            this.addSource('/test3.dart','library test3;
            await this.resolveTestUnit('library test;
            let error : any = await this._findErrorToFix();
            this.fix = await this._assertHasFix(DartFixKind.CREATE_METHOD,error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            let fileEdit : any = op(Op.INDEX,this.change.edits,0);
            expect(fileEdit.file,'/test2.dart');
            expect(SourceEdit.applySequence(code2,fileEdit.edits),'library test2;
        } )());
    }

    test_undefinedMethod_parameterType_inTargetUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let code2 : string = 'library test2;
            this.addSource('/test2.dart',code2);
            await this.resolveTestUnit('library test;
            let error : any = await this._findErrorToFix();
            this.fix = await this._assertHasFix(DartFixKind.CREATE_METHOD,error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            let fileEdit : any = op(Op.INDEX,this.change.edits,0);
            expect(fileEdit.file,'/test2.dart');
            expect(SourceEdit.applySequence(code2,fileEdit.edits),'library test2;
        } )());
    }

    test_undefinedMethod_useSimilar_ignoreOperators() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(Object object) {
            await this.assertNoFix(DartFixKind.CHANGE_TO);
        } )());
    }

    test_undefinedMethod_useSimilar_qualified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {
        } )());
    }

    test_undefinedMethod_useSimilar_unqualified_superClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {
        } )());
    }

    test_undefinedMethod_useSimilar_unqualified_thisClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {
        } )());
    }

    test_undefinedParameter_convertFlutterChild_invalidList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';
            await this.assertNoFix(DartFixKind.CONVERT_FLUTTER_CHILD);
        } )());
    }

    test_undefinedParameter_convertFlutterChild_OK_hasList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';
            await this.assertHasFix(DartFixKind.CONVERT_FLUTTER_CHILD,'import \'package:flutter/src/widgets/framework.dart\';
        } )());
    }

    test_undefinedParameter_convertFlutterChild_OK_hasTypedList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';
            await this.assertHasFix(DartFixKind.CONVERT_FLUTTER_CHILD,'import \'package:flutter/src/widgets/framework.dart\';
        } )());
    }

    test_undefinedParameter_convertFlutterChild_OK_multiLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._configureFlutterPkg(new core.DartMap.literal([
                ['src/widgets/framework.dart',lib4.properties.flutter_framework_code]]));
            await this.resolveTestUnit('import \'package:flutter/src/widgets/framework.dart\';
            await this.assertHasFix(DartFixKind.CONVERT_FLUTTER_CHILD,'import \'package:flutter/src/widgets/framework.dart\';
        } )());
    }

    test_undefinedSetter_useSimilar_hint() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {
        } )());
    }

    test_undefinedSetter_useSimilar_qualified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {
        } )());
    }

    test_undefinedSetter_useSimilar_unqualified() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class A {
            await this.assertHasFix(DartFixKind.CHANGE_TO,'class A {
        } )());
    }

    test_useEffectiveIntegerDivision() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {
            await this.assertHasFix(DartFixKind.USE_EFFECTIVE_INTEGER_DIVISION,'main() {
        } )());
    }

    test_useImportPrefix_withClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:async\' as pref;
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PREFIX,'import \'dart:async\' as pref;
        } )());
    }

    test_useImportPrefix_withTopLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('import \'dart:math\' as pref;
            await this.assertHasFix(DartFixKind.IMPORT_LIBRARY_PREFIX,'import \'dart:math\' as pref;
        } )());
    }

    _addMetaPackageSource() : void {
        this.addPackageSource('meta','meta.dart','library meta;
    }
    _configureFlutterPkg(pathToCode : core.DartMap<string,string>) : void {
        pathToCode.forEach((path : any,code : any) =>  {
            this.provider.newFile(`${lib4.properties.flutterPkgLibPath}/${path}`,code);
        });
        let myPkgFolder : any = this.provider.getResource(lib4.properties.flutterPkgLibPath);
        let pkgResolver : any = new bare.createInstance(any,null,this.provider,new core.DartMap.literal([
            ['flutter',new core.DartList.literal(myPkgFolder)]]));
        let sourceFactory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.sdk),pkgResolver,this.resourceResolver));
        if (this.enableNewAnalysisDriver) {
            this.driver.configure({
                sourceFactory : sourceFactory});
        }else {
            this.context.sourceFactory = sourceFactory;
        }
        this.addSource('/tmp/other.dart',pathToCode.keys.map((path : any) =>  {
            return `import 'package:flutter/${path}';`;
        }).join('\n'));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FixProcessorTest() {
    }
}

export namespace LintFixTest {
    export type Constructors = BaseFixProcessorTest.Constructors | 'LintFixTest';
    export type Interface = Omit<LintFixTest, Constructors>;
}
@DartClass
export class LintFixTest extends BaseFixProcessorTest {
    error : any;

    applyFix(kind : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.fix = await this._assertHasFix(kind,this.error);
            this.change = this.fix.change;
            let fileEdits : core.DartList<any> = this.change.edits;
            expect(fileEdits,hasLength(1));
            this.resultCode = SourceEdit.applySequence(this.testCode,op(Op.INDEX,this.change.edits,0).edits);
        } )());
    }

    findLint(src : string,lintCode : string,_namedArguments? : {length? : number}) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let {length} = Object.assign({
                "length" : 1}, _namedArguments );
            let errorOffset : number = new core.DartString(src).indexOf('/*LINT*/');
            await this.resolveTestUnit(new core.DartString(src).replaceAll('/*LINT*/',''));
            this.error = new bare.createInstance(any,null,resolutionMap.elementDeclaredByCompilationUnit(this.testUnit).source,errorOffset,length,new bare.createInstance(any,null,lintCode,'<ignored>'));
        } )());
    }

    test_lint_addMissingOverride_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class abstract Test {
            await this.findLint(src,LintNames.annotate_overrides);
            await this.applyFix(DartFixKind.LINT_ADD_OVERRIDE);
            this.verifyResult('class abstract Test {
        } )());
    }

    test_lint_addMissingOverride_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Test {
            await this.findLint(src,LintNames.annotate_overrides);
            await this.applyFix(DartFixKind.LINT_ADD_OVERRIDE);
            this.verifyResult('class Test {
        } )());
    }

    test_lint_addMissingOverride_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Test {
            await this.findLint(src,LintNames.annotate_overrides);
            await this.applyFix(DartFixKind.LINT_ADD_OVERRIDE);
            this.verifyResult('class Test {
        } )());
    }

    test_lint_addMissingOverride_method_with_doc_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Test {
            await this.findLint(src,LintNames.annotate_overrides);
            await this.applyFix(DartFixKind.LINT_ADD_OVERRIDE);
            this.verifyResult('class Test {
        } )());
    }

    test_lint_addMissingOverride_method_with_doc_comment_2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Test {
            await this.findLint(src,LintNames.annotate_overrides);
            await this.applyFix(DartFixKind.LINT_ADD_OVERRIDE);
            this.verifyResult('class Test {
        } )());
    }

    test_lint_addMissingOverride_method_with_doc_comment_and_metadata() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Test {
            await this.findLint(src,LintNames.annotate_overrides);
            await this.applyFix(DartFixKind.LINT_ADD_OVERRIDE);
            this.verifyResult('class Test {
        } )());
    }

    test_lint_addMissingOverride_method_with_non_doc_comment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Test {
            await this.findLint(src,LintNames.annotate_overrides);
            await this.applyFix(DartFixKind.LINT_ADD_OVERRIDE);
            this.verifyResult('class Test {
        } )());
    }

    test_lint_removeInterpolationBraces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'main() {
            await this.findLint(src,LintNames.unnecessary_brace_in_string_interp,{
                length : 4});
            await this.applyFix(DartFixKind.LINT_REMOVE_INTERPOLATION_BRACES);
            this.verifyResult('main() {
        } )());
    }

    test_removeAwait_intLiteral() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'bad() async {
            await this.findLint(src,LintNames.await_only_futures);
            await this.applyFix(DartFixKind.REMOVE_AWAIT);
            this.verifyResult('bad() async {
        } )());
    }

    test_removeAwait_StringLiteral() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'bad() async {
            await this.findLint(src,LintNames.await_only_futures);
            await this.applyFix(DartFixKind.REMOVE_AWAIT);
            this.verifyResult('bad() async {
        } )());
    }

    test_removeEmptyStatement_insideBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'void foo() {
            await this.findLint(src,LintNames.empty_statements);
            await this.applyFix(DartFixKind.REMOVE_EMPTY_STATEMENT);
            this.verifyResult('void foo() {
        } )());
    }

    test_removeEmptyStatement_outOfBlock_otherLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'void foo() {
            await this.findLint(src,LintNames.empty_statements);
            await this.applyFix(DartFixKind.REPLACE_WITH_BRACKETS);
            this.verifyResult('void foo() {
        } )());
    }

    test_removeEmptyStatement_outOfBlock_sameLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'void foo() {
            await this.findLint(src,LintNames.empty_statements);
            await this.applyFix(DartFixKind.REPLACE_WITH_BRACKETS);
            this.verifyResult('void foo() {
        } )());
    }

    test_removeInitializer_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Test {
            await this.findLint(src,LintNames.avoid_init_to_null);
            await this.applyFix(DartFixKind.REMOVE_INITIALIZER);
            this.verifyResult('class Test {
        } )());
    }

    test_removeInitializer_listOfVariableDeclarations() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'String a = \'a\', /*LINT*/b = null, c = \'c\';
            await this.findLint(src,LintNames.avoid_init_to_null);
            await this.applyFix(DartFixKind.REMOVE_INITIALIZER);
            this.verifyResult('String a = \'a\', b, c = \'c\';
        } )());
    }

    test_removeInitializer_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'var /*LINT*/x = null;
            await this.findLint(src,LintNames.avoid_init_to_null);
            await this.applyFix(DartFixKind.REMOVE_INITIALIZER);
            this.verifyResult('var x;
        } )());
    }

    test_removeMethodDeclaration_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class A {
            await this.findLint(src,LintNames.unnecessary_override);
            await this.applyFix(DartFixKind.REMOVE_METHOD_DECLARATION);
            this.verifyResult('class A {
        } )());
    }

    test_removeMethodDeclaration_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class A {
            await this.findLint(src,LintNames.unnecessary_override);
            await this.applyFix(DartFixKind.REMOVE_METHOD_DECLARATION);
            this.verifyResult('class A {
        } )());
    }

    test_removeMethodDeclaration_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class A {
            await this.findLint(src,LintNames.unnecessary_override);
            await this.applyFix(DartFixKind.REMOVE_METHOD_DECLARATION);
            this.verifyResult('class A {
        } )());
    }

    test_removeThisExpression_methodInvocation_oneCharacterOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class A {
            await this.findLint(src,LintNames.unnecessary_this);
            await this.applyFix(DartFixKind.REMOVE_THIS_EXPRESSION);
            this.verifyResult('class A {
        } )());
    }

    test_removeThisExpression_methodInvocation_twoCharactersOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class A {
            await this.findLint(src,LintNames.unnecessary_this);
            await this.applyFix(DartFixKind.REMOVE_THIS_EXPRESSION);
            this.verifyResult('class A {
        } )());
    }

    test_removeThisExpression_propertyAccess_oneCharacterOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class A {
            await this.findLint(src,LintNames.unnecessary_this);
            await this.applyFix(DartFixKind.REMOVE_THIS_EXPRESSION);
            this.verifyResult('class A {
        } )());
    }

    test_removeThisExpression_propertyAccess_twoCharactersOperator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class A {
            await this.findLint(src,LintNames.unnecessary_this);
            await this.applyFix(DartFixKind.REMOVE_THIS_EXPRESSION);
            this.verifyResult('class A {
        } )());
    }

    test_removeTypeName_avoidAnnotatingWithDynamic_InsideFunctionTypedFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'bad(void foo(/*LINT*/dynamic x)) {
            await this.findLint(src,LintNames.avoid_annotating_with_dynamic);
            await this.applyFix(DartFixKind.REMOVE_TYPE_NAME);
            this.verifyResult('bad(void foo(x)) {
        } )());
    }

    test_removeTypeName_avoidAnnotatingWithDynamic_NamedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'bad({/*LINT*/dynamic defaultValue}) {
            await this.findLint(src,LintNames.avoid_annotating_with_dynamic);
            await this.applyFix(DartFixKind.REMOVE_TYPE_NAME);
            this.verifyResult('bad({defaultValue}) {
        } )());
    }

    test_removeTypeName_avoidAnnotatingWithDynamic_NormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'bad(/*LINT*/dynamic defaultValue) {
            await this.findLint(src,LintNames.avoid_annotating_with_dynamic);
            await this.applyFix(DartFixKind.REMOVE_TYPE_NAME);
            this.verifyResult('bad(defaultValue) {
        } )());
    }

    test_removeTypeName_avoidAnnotatingWithDynamic_OptionalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'bad([/*LINT*/dynamic defaultValue]) {
            await this.findLint(src,LintNames.avoid_annotating_with_dynamic);
            await this.applyFix(DartFixKind.REMOVE_TYPE_NAME);
            this.verifyResult('bad([defaultValue]) {
        } )());
    }

    test_removeTypeName_avoidReturnTypesOnSetters_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = '/*LINT*/void set speed2(int ms) {}
            await this.findLint(src,LintNames.avoid_return_types_on_setters);
            await this.applyFix(DartFixKind.REMOVE_TYPE_NAME);
            this.verifyResult('set speed2(int ms) {}
        } )());
    }

    test_removeTypeName_avoidTypesOnClosureParameters_FunctionTypedFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'var functionWithFunction = (/*LINT*/int f(int x)) => f(0);
            await this.findLint(src,LintNames.avoid_types_on_closure_parameters);
            await this.applyFix(DartFixKind.REPLACE_WITH_IDENTIFIER);
            this.verifyResult('var functionWithFunction = (f) => f(0);
        } )());
    }

    test_removeTypeName_avoidTypesOnClosureParameters_NamedParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'var x = ({/*LINT*/Future<int> defaultValue}) {
            await this.findLint(src,LintNames.avoid_types_on_closure_parameters);
            await this.applyFix(DartFixKind.REMOVE_TYPE_NAME);
            this.verifyResult('var x = ({defaultValue}) {
        } )());
    }

    test_removeTypeName_avoidTypesOnClosureParameters_NormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'var x = (/*LINT*/Future<int> defaultValue) {
            await this.findLint(src,LintNames.avoid_types_on_closure_parameters);
            await this.applyFix(DartFixKind.REMOVE_TYPE_NAME);
            this.verifyResult('var x = (defaultValue) {
        } )());
    }

    test_removeTypeName_avoidTypesOnClosureParameters_OptionalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'var x = ([/*LINT*/Future<int> defaultValue]) {
            await this.findLint(src,LintNames.avoid_types_on_closure_parameters);
            await this.applyFix(DartFixKind.REMOVE_TYPE_NAME);
            this.verifyResult('var x = ([defaultValue]) {
        } )());
    }

    test_replaceWithConditionalAssignment_withCodeBeforeAndAfter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Person {
            await this.findLint(src,LintNames.prefer_conditional_assignment);
            await this.applyFix(DartFixKind.REPLACE_WITH_CONDITIONAL_ASSIGNMENT);
            this.verifyResult('class Person {
        } )());
    }

    test_replaceWithConditionalAssignment_withOneBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Person {
            await this.findLint(src,LintNames.prefer_conditional_assignment);
            await this.applyFix(DartFixKind.REPLACE_WITH_CONDITIONAL_ASSIGNMENT);
            this.verifyResult('class Person {
        } )());
    }

    test_replaceWithConditionalAssignment_withoutBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Person {
            await this.findLint(src,LintNames.prefer_conditional_assignment);
            await this.applyFix(DartFixKind.REPLACE_WITH_CONDITIONAL_ASSIGNMENT);
            this.verifyResult('class Person {
        } )());
    }

    test_replaceWithConditionalAssignment_withTwoBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'class Person {
            await this.findLint(src,LintNames.prefer_conditional_assignment);
            await this.applyFix(DartFixKind.REPLACE_WITH_CONDITIONAL_ASSIGNMENT);
            this.verifyResult('class Person {
        } )());
    }

    test_replaceWithLiteral_linkedHashMap_withCommentsInGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'import \'dart:collection\';
            await this.findLint(src,LintNames.prefer_collection_literals);
            await this.applyFix(DartFixKind.REPLACE_WITH_LITERAL);
            this.verifyResult('import \'dart:collection\';
        } )());
    }

    test_replaceWithLiteral_linkedHashMap_withDynamicGenerics() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'import \'dart:collection\';
            await this.findLint(src,LintNames.prefer_collection_literals);
            await this.applyFix(DartFixKind.REPLACE_WITH_LITERAL);
            this.verifyResult('import \'dart:collection\';
        } )());
    }

    test_replaceWithLiteral_linkedHashMap_withGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'import \'dart:collection\';
            await this.findLint(src,LintNames.prefer_collection_literals);
            await this.applyFix(DartFixKind.REPLACE_WITH_LITERAL);
            this.verifyResult('import \'dart:collection\';
        } )());
    }

    test_replaceWithLiteral_linkedHashMap_withoutGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'import \'dart:collection\';
            await this.findLint(src,LintNames.prefer_collection_literals);
            await this.applyFix(DartFixKind.REPLACE_WITH_LITERAL);
            this.verifyResult('import \'dart:collection\';
        } )());
    }

    test_replaceWithLiteral_list_withGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'final a = /*LINT*/new List<int>();
            await this.findLint(src,LintNames.prefer_collection_literals);
            await this.applyFix(DartFixKind.REPLACE_WITH_LITERAL);
            this.verifyResult('final a = <int>[];
        } )());
    }

    test_replaceWithLiteral_list_withoutGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'final a = /*LINT*/new List();
            await this.findLint(src,LintNames.prefer_collection_literals);
            await this.applyFix(DartFixKind.REPLACE_WITH_LITERAL);
            this.verifyResult('final a = [];
        } )());
    }

    test_replaceWithLiteral_map_withGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'final a = /*LINT*/new Map<int,int>();
            await this.findLint(src,LintNames.prefer_collection_literals);
            await this.applyFix(DartFixKind.REPLACE_WITH_LITERAL);
            this.verifyResult('final a = <int,int>{};
        } )());
    }

    test_replaceWithLiteral_map_withoutGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'final a = /*LINT*/new Map();
            await this.findLint(src,LintNames.prefer_collection_literals);
            await this.applyFix(DartFixKind.REPLACE_WITH_LITERAL);
            this.verifyResult('final a = {};
        } )());
    }

    test_replaceWithTearOff_function_oneParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'final x = /*LINT*/(name) {
            await this.findLint(src,LintNames.unnecessary_lambdas);
            await this.applyFix(DartFixKind.REPLACE_WITH_TEAR_OFF);
            this.verifyResult('final x = print;
        } )());
    }

    test_replaceWithTearOff_function_zeroParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'void foo(){}
            await this.findLint(src,LintNames.unnecessary_lambdas);
            await this.applyFix(DartFixKind.REPLACE_WITH_TEAR_OFF);
            this.verifyResult('void foo(){}
        } )());
    }

    test_replaceWithTearOff_lambda_asArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'void foo() {
            await this.findLint(src,LintNames.unnecessary_lambdas);
            await this.applyFix(DartFixKind.REPLACE_WITH_TEAR_OFF);
            this.verifyResult('void foo() {
        } )());
    }

    test_replaceWithTearOff_method_oneParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'var a = /*LINT*/(x) => finalList.remove(x);
            await this.findLint(src,LintNames.unnecessary_lambdas);
            await this.applyFix(DartFixKind.REPLACE_WITH_TEAR_OFF);
            this.verifyResult('var a = finalList.remove;
        } )());
    }

    test_replaceWithTearOff_method_zeroParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let src : string = 'final Object a;
            await this.findLint(src,LintNames.unnecessary_lambdas);
            await this.applyFix(DartFixKind.REPLACE_WITH_TEAR_OFF);
            this.verifyResult('final Object a;
        } )());
    }

    verifyResult(expectedResult : string) : void {
        expect(this.resultCode,expectedResult);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LintFixTest() {
    }
}

export class properties {
}