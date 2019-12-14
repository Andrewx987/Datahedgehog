/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/summary/resynthesize_common.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../abstract_single_unit";
import * as lib4 from "./../../generated/test_support";
import * as lib5 from "./../context/abstract_context";
import * as lib6 from "./element_text";
import * as lib7 from "@dart2ts/dart/uri";

export namespace AbstractResynthesizeTest {
    export type Constructors = lib3.AbstractSingleUnitTest.Constructors | 'AbstractResynthesizeTest';
    export type Interface = Omit<AbstractResynthesizeTest, Constructors>;
}
@DartClass
export class AbstractResynthesizeTest extends lib3.AbstractSingleUnitTest {
    otherLibrarySources : core.DartSet<any>;

    variablesWithNotConstInitializers : core.DartSet<string>;

    namesThatCannotBeResolved : core.DartSet<string>;

    allowMissingFiles : boolean;

    shouldCompareLibraryElements : boolean;

    @AbstractProperty
    get isStrongMode() : boolean{ throw 'abstract'}
    addLibrary(uri : string) : void {
        this.otherLibrarySources.add(this.context.sourceFactory.forUri(uri));
    }
    addLibrarySource(filePath : string,contents : string) : any {
        let source : any = this.addSource(filePath,contents);
        this.otherLibrarySources.add(source);
        return source;
    }
    assertNoErrors(source : any) : void {
        let errorListener : lib4.GatheringErrorListener = new lib4.GatheringErrorListener();
        for(let error of this.context.computeErrors(source)) {
            expect(error.source,source);
            let errorCode : any = error.errorCode;
            if (op(Op.EQUALS,errorCode,HintCode.UNUSED_ELEMENT) || op(Op.EQUALS,errorCode,HintCode.UNUSED_FIELD)) {
                continue;
            }
            if (op(Op.EQUALS,errorCode,HintCode.UNUSED_CATCH_CLAUSE) || op(Op.EQUALS,errorCode,HintCode.UNUSED_CATCH_STACK) || op(Op.EQUALS,errorCode,HintCode.UNUSED_LOCAL_VARIABLE)) {
                continue;
            }
            errorListener.onError(error);
        }
        errorListener.assertNoErrors();
    }
    checkElidablePrefix(prefix : any) : void {
        if (isNot(prefix.staticElement, any) && isNot(prefix.staticElement, any)) {
            fail(`Prefix of type ${prefix.staticElement.runtimeType}` + ' should not have been elided');
        }
    }
    checkLibraryElements(original : any,resynthesized : any) : void {
        this.compareElements(resynthesized,original,'(library)');
        expect(resynthesized.displayName,original.displayName);
        expect(original.enclosingElement,isNull);
        expect(resynthesized.enclosingElement,isNull);
        expect(resynthesized.hasExtUri,original.hasExtUri);
        this.compareCompilationUnitElements(resynthesized.definingCompilationUnit,original.definingCompilationUnit);
        expect(resynthesized.parts.length,original.parts.length,{
            reason : 'parts'});
        for(let i : number = 0; i < resynthesized.parts.length; i++){
            this.compareCompilationUnitElements(op(Op.INDEX,resynthesized.parts,i),op(Op.INDEX,original.parts,i));
        }
        expect(resynthesized.imports.length,original.imports.length,{
            reason : 'imports'});
        for(let i : number = 0; i < resynthesized.imports.length; i++){
            let originalImport : any = op(Op.INDEX,original.imports,i);
            this.compareImportElements(op(Op.INDEX,resynthesized.imports,i),originalImport,originalImport.toString());
        }
        expect(resynthesized.exports.length,original.exports.length,{
            reason : 'exports'});
        for(let i : number = 0; i < resynthesized.exports.length; i++){
            let originalExport : any = op(Op.INDEX,original.exports,i);
            this.compareExportElements(op(Op.INDEX,resynthesized.exports,i),originalExport,originalExport.toString());
        }
        expect(resynthesized.nameLength,original.nameLength);
        this.compareNamespaces(resynthesized.publicNamespace,original.publicNamespace,'(public namespace)');
        this.compareNamespaces(resynthesized.exportNamespace,original.exportNamespace,'(export namespace)');
        if (op(Op.EQUALS,original.entryPoint,null)) {
            expect(resynthesized.entryPoint,isNull);
        }else {
            expect(resynthesized.entryPoint,isNotNull);
            this.compareFunctionElements(resynthesized.entryPoint,original.entryPoint,'(entry point)');
        }
        if (original.name != 'dart.core' && original.name != 'dart.async') {
            this.compareExecutableElements(resynthesized.loadLibraryFunction as any,original.loadLibraryFunction as any,'(loadLibraryFunction)');
        }
        expect(resynthesized.libraryCycle.toSet(),original.libraryCycle.toSet());
    }
    checkMinimalResynthesisWork(resynthesizer : TestSummaryResynthesizer,library : any) : void {
        expect(resynthesizer.resynthesisCount,3);
        expect(resynthesizer.linkedSummariesRequested,hasLength(1));
        expect(resynthesizer.linkedSummariesRequested.first,library.source.uri.toString());
        let expectedCompilationUnitUris : core.DartSet<string> = library.units.map((unit : any) =>  {
            return unit.source.uri.toString();
        }).toSet();
        for(let requestedUri of resynthesizer.unlinkedSummariesRequested) {
            expect(expectedCompilationUnitUris,contains(requestedUri));
        }
    }
    checkPossibleLocalElements(resynthesized : any,original : any) : void {
        if (isNot(original, any) && isNot(resynthesized, any)) {
            return;
        }
        if (is(original, any) && is(resynthesized, any)) {
            expect(resynthesized.visibleRange,original.visibleRange);
        }else {
            fail('Incompatible local elements ' + `${resynthesized.runtimeType} vs. ${original.runtimeType}`);
        }
    }
    checkPossibleMember(resynthesized : any,original : any,desc : string) : void {
        let resynthesizedNonHandle : any = is(resynthesized, any) ? resynthesized.actualElement : resynthesized;
        if (is(original, any)) {
            expect(resynthesizedNonHandle,new bare.createInstance(any,null),{
                reason : desc});
            if (is(resynthesizedNonHandle, any)) {
                let resynthesizedTypeArguments : core.DartList<any> = resynthesizedNonHandle.definingType.typeArguments;
                let originalTypeArguments : core.DartList<any> = original.definingType.typeArguments;
                expect(resynthesizedTypeArguments,hasLength(originalTypeArguments.length),{
                    reason : desc});
                for(let i : number = 0; i < originalTypeArguments.length; i++){
                    this.compareTypeImpls(resynthesizedTypeArguments[i],originalTypeArguments[i],`${desc} type argument ${i}`);
                }
            }
        }else {
            expect(resynthesizedNonHandle,isNot(new bare.createInstance(any,null)),{
                reason : desc});
        }
    }
    compareClassElements(r : any,o : any,desc : string) : void {
        this.compareElements(r,o,desc);
        expect(r.fields.length,o.fields.length,{
            reason : `${desc} fields.length`});
        for(let i : number = 0; i < r.fields.length; i++){
            let name : string = op(Op.INDEX,o.fields,i).name;
            this.compareFieldElements(op(Op.INDEX,r.fields,i),op(Op.INDEX,o.fields,i),`${desc}.field ${name}`);
        }
        this.compareTypes(r.supertype,o.supertype,`${desc} supertype`);
        expect(r.interfaces.length,o.interfaces.length,{
            reason : `${desc} interfaces.length`});
        for(let i : number = 0; i < r.interfaces.length; i++){
            this.compareTypes(op(Op.INDEX,r.interfaces,i),op(Op.INDEX,o.interfaces,i),`${desc} interface ${op(Op.INDEX,o.interfaces,i).name}`);
        }
        expect(r.mixins.length,o.mixins.length,{
            reason : `${desc} mixins.length`});
        for(let i : number = 0; i < r.mixins.length; i++){
            this.compareTypes(op(Op.INDEX,r.mixins,i),op(Op.INDEX,o.mixins,i),`${desc} mixin ${op(Op.INDEX,o.mixins,i).name}`);
        }
        expect(r.typeParameters.length,o.typeParameters.length,{
            reason : `${desc} typeParameters.length`});
        for(let i : number = 0; i < r.typeParameters.length; i++){
            this.compareTypeParameterElements(op(Op.INDEX,r.typeParameters,i),op(Op.INDEX,o.typeParameters,i),`${desc} type parameter ${op(Op.INDEX,o.typeParameters,i).name}`);
        }
        expect(r.constructors.length,o.constructors.length,{
            reason : `${desc} constructors.length`});
        for(let i : number = 0; i < r.constructors.length; i++){
            this.compareConstructorElements(op(Op.INDEX,r.constructors,i),op(Op.INDEX,o.constructors,i),`${desc} constructor ${op(Op.INDEX,o.constructors,i).name}`);
        }
        expect(r.accessors.length,o.accessors.length,{
            reason : `${desc} accessors.length`});
        let rAccessors : core.DartList<any> = this._getSortedPropertyAccessors(r);
        let oAccessors : core.DartList<any> = this._getSortedPropertyAccessors(o);
        for(let i : number = 0; i < r.accessors.length; i++){
            this.comparePropertyAccessorElements(rAccessors[i],oAccessors[i],`${desc} accessor ${oAccessors[i].name}`);
        }
        expect(r.methods.length,o.methods.length,{
            reason : `${desc} methods.length`});
        for(let i : number = 0; i < r.methods.length; i++){
            this.compareMethodElements(op(Op.INDEX,r.methods,i),op(Op.INDEX,o.methods,i),`${desc}.${op(Op.INDEX,o.methods,i).name}`);
        }
        this.compareTypes(r.type,o.type,desc);
        if (is(r, any) && is(o, any)) {
            expect(r.hasBeenInferred,o.hasBeenInferred,{
                reason : desc});
        }
    }
    compareCompilationUnitElements(resynthesized : any,original : any) : void {
        let desc : string = `Compilation unit ${original.source.uri}`;
        this.compareUriReferencedElements(resynthesized,original,desc);
        expect(resynthesized.source,original.source);
        expect(resynthesized.librarySource,original.librarySource);
        this.compareLineInfo(resynthesized.lineInfo,original.lineInfo);
        expect(resynthesized.types.length,original.types.length,{
            reason : `${desc}.types.length`});
        for(let i : number = 0; i < resynthesized.types.length; i++){
            this.compareClassElements(op(Op.INDEX,resynthesized.types,i),op(Op.INDEX,original.types,i),op(Op.INDEX,original.types,i).name);
        }
        expect(resynthesized.topLevelVariables.length,original.topLevelVariables.length,{
            reason : `${desc}.topLevelVariables.length`});
        for(let i : number = 0; i < resynthesized.topLevelVariables.length; i++){
            let name : string = op(Op.INDEX,resynthesized.topLevelVariables,i).name;
            this.compareTopLevelVariableElements(op(Op.INDEX,resynthesized.topLevelVariables,i),original.topLevelVariables.singleWhere((e : any) =>  {
                return op(Op.EQUALS,e.name,name);
            }),`${desc}.topLevelVariables[${name}]`);
        }
        expect(resynthesized.functions.length,original.functions.length,{
            reason : `${desc}.functions.length`});
        for(let i : number = 0; i < resynthesized.functions.length; i++){
            this.compareFunctionElements(op(Op.INDEX,resynthesized.functions,i),op(Op.INDEX,original.functions,i),`${desc}.functions[${i}] /* ${op(Op.INDEX,original.functions,i).name} */`);
        }
        expect(resynthesized.functionTypeAliases.length,original.functionTypeAliases.length,{
            reason : `${desc}.functionTypeAliases.length`});
        for(let i : number = 0; i < resynthesized.functionTypeAliases.length; i++){
            this.compareFunctionTypeAliasElements(op(Op.INDEX,resynthesized.functionTypeAliases,i),op(Op.INDEX,original.functionTypeAliases,i),op(Op.INDEX,original.functionTypeAliases,i).name);
        }
        expect(resynthesized.enums.length,original.enums.length,{
            reason : `${desc}.enums.length`});
        for(let i : number = 0; i < resynthesized.enums.length; i++){
            this.compareClassElements(op(Op.INDEX,resynthesized.enums,i),op(Op.INDEX,original.enums,i),op(Op.INDEX,original.enums,i).name);
        }
        expect(resynthesized.accessors.length,original.accessors.length,{
            reason : `${desc}.accessors.length`});
        for(let i : number = 0; i < resynthesized.accessors.length; i++){
            let name : string = op(Op.INDEX,resynthesized.accessors,i).name;
            if (op(Op.INDEX,original.accessors,i).isGetter) {
                this.comparePropertyAccessorElements(op(Op.INDEX,resynthesized.accessors,i),original.accessors.singleWhere((e : any) =>  {
                    return op(Op.EQUALS,e.name,name);
                }),`${desc}.accessors[${i}] /* getter ${name} */`);
            }else {
                this.comparePropertyAccessorElements(op(Op.INDEX,resynthesized.accessors,i),original.accessors.singleWhere((e : any) =>  {
                    return op(Op.EQUALS,e.name,name);
                }),`${desc}.accessors[${i}] /* setter ${name} */`);
            }
        }
    }
    compareConstAstLists(rItems : core.DartList<core.DartObject>,oItems : core.DartList<core.DartObject>,desc : string) : void {
        if (rItems == null && oItems == null) {
            return;
        }
        expect(rItems != null && oItems != null,isTrue);
        expect(rItems,hasLength(oItems.length));
        for(let i : number = 0; i < oItems.length; i++){
            let rItem : core.DartObject = rItems[i];
            let oItem : core.DartObject = oItems[i];
            if (is(rItem, any) && is(oItem, any)) {
                this.compareConstAsts(rItem,oItem,desc);
            }else if (is(rItem, any) && is(oItem, any)) {
                this.compareConstAsts(rItem.name,oItem.name,desc);
            }else if (is(rItem, any) && is(oItem, any)) {
                expect(rItem.value,oItem.value);
            }else if (is(rItem, any) && is(oItem, any)) {
                this.compareConstAsts(rItem.expression,oItem.expression,desc);
            }else if (is(rItem, any) && is(oItem, any)) {
                this.compareConstAsts(rItem.key,oItem.key,desc);
                this.compareConstAsts(rItem.value,oItem.value,desc);
            }else if (is(oItem, any) && is(rItem, any)) {
                this.compareConstAsts(rItem.fieldName,oItem.fieldName,desc);
                if (this.variablesWithNotConstInitializers.contains(rItem.fieldName.name)) {
                    this._assertUnresolvedIdentifier(rItem.expression,desc);
                }else {
                    this.compareConstAsts(rItem.expression,oItem.expression,desc);
                }
            }else if (is(oItem, any) && is(rItem, any)) {
                this.compareConstAsts(rItem.condition,oItem.condition,`${desc} condition`);
                this.compareConstAsts(rItem.message,oItem.message,`${desc} message`);
            }else if (is(oItem, any) && is(rItem, any)) {
                this.compareElements(rItem.staticElement,oItem.staticElement,desc);
                this.compareConstAsts(rItem.constructorName,oItem.constructorName,desc);
                this.compareConstAstLists(rItem.argumentList.arguments,oItem.argumentList.arguments,desc);
            }else if (is(oItem, any) && is(rItem, any)) {
                this.compareElements(rItem.staticElement,oItem.staticElement,desc);
                this.compareConstAsts(rItem.constructorName,oItem.constructorName,desc);
                this.compareConstAstLists(rItem.argumentList.arguments,oItem.argumentList.arguments,desc);
            }else {
                fail(`${desc} Incompatible item types: ` + `${rItem.runtimeType} vs. ${oItem.runtimeType}`);
            }
        }
    }
    compareConstAsts(r : any,o : any,desc : string) : void {
        if (op(Op.EQUALS,o,null)) {
            expect(r,isNull,{
                reason : desc});
        }else {
            expect(r,isNotNull,{
                reason : desc});
            if (is(o, any)) {
                this.compareConstAsts(r,o.expression,desc);
            }else if (is(o, any) && is(r, any)) {
                expect(r.name,o.name,{
                    reason : desc});
                if (this.namesThatCannotBeResolved.contains(r.name)) {
                    expect(r.staticElement,isNull);
                }else {
                    this.compareElements(r.staticElement,o.staticElement,desc);
                }
            }else if (is(o, any) && is(r, any)) {
                if (is(o.prefix.staticElement, any) || is(o.prefix.staticElement, any)) {
                    this.compareConstAsts(r,o.identifier,desc);
                }else {
                    fail(`Prefix of type ${o.prefix.staticElement.runtimeType} should not` + ' have been elided');
                }
            }else if (is(o, any) && is(r, any)) {
                if (is(r.prefix.staticElement, any)) {
                    let oElement : any = resolutionMap.staticElementForIdentifier(o);
                    this.compareElements(r.prefix.staticElement,((t)=>(!!t)?t.enclosingElement:null)(oElement),desc);
                    this.compareConstAsts(r.identifier,o,desc);
                }else {
                    fail(`Prefix of type ${r.prefix.staticElement.runtimeType} should not` + ' have been elided');
                }
            }else if (is(o, any) && is(o.target, any) && is(r, any)) {
                let oTarget : any = o.target;
                this.checkElidablePrefix(oTarget.prefix);
                this.compareConstAsts(r,AstTestFactory.identifier(oTarget.identifier,o.propertyName),desc);
            }else if (is(o, any) && is(r, any)) {
                this.compareConstAsts(r.prefix,o.prefix,desc);
                this.compareConstAsts(r.identifier,o.identifier,desc);
            }else if (is(o, any) && is(r, any)) {
                this.compareConstAsts(r.target,o.target,desc);
                let oName : string = o.propertyName.name;
                let rName : string = r.propertyName.name;
                expect(rName,oName,{
                    reason : desc});
                if (oName == 'length') {
                    this.compareElements(r.propertyName.staticElement,o.propertyName.staticElement,desc);
                }
            }else if (is(o, any) && is(o.target, any) && is(r, any)) {
                let oTarget : any = o.target;
                this.checkElidablePrefix(oTarget.prefix);
                this.checkElidablePrefix(oTarget.identifier);
                this.compareConstAsts(r,o.propertyName,desc);
            }else if (is(o, any) && is(r, any)) {
            }else if (is(o, any) && is(r, any)) {
            }else if (is(o, any)) {
                expect(r,new bare.createInstance(any,null),{
                    reason : desc});
            }else if (is(o, any) && is(r, any)) {
                expect(r.value,o.value,{
                    reason : desc});
            }else if (is(o, any) && is(r, any)) {
                expect(r.value,o.value,{
                    reason : desc});
            }else if (is(o, any) && is(r, any)) {
                if (r.value != null && r.value.isNaN && o.value != null && o.value.isNaN) {
                }else {
                    expect(r.value,o.value,{
                        reason : desc});
                }
            }else if (is(o, any) && is(r, any)) {
                this.compareConstAstLists(r.elements,o.elements,desc);
            }else if (is(o, any) && is(r, any)) {
                expect(r.stringValue,o.stringValue,{
                    reason : desc});
            }else if (is(o, any) && is(r, any)) {
                expect(r.components.map((t : any) =>  {
                    return t.lexeme;
                }).join('.'),o.components.map((t : any) =>  {
                    return t.lexeme;
                }).join('.'),{
                    reason : desc});
            }else if (is(o, any) && is(r, any)) {
                expect(r.name.label.name,o.name.label.name,{
                    reason : desc});
                this.compareConstAsts(r.expression,o.expression,desc);
            }else if (is(o, any) && is(r, any)) {
                expect(r.operator.lexeme,o.operator.lexeme,{
                    reason : desc});
                this.compareConstAsts(r.leftOperand,o.leftOperand,desc);
                this.compareConstAsts(r.rightOperand,o.rightOperand,desc);
            }else if (is(o, any) && is(r, any)) {
                expect(r.operator.lexeme,o.operator.lexeme,{
                    reason : desc});
                this.compareConstAsts(r.operand,o.operand,desc);
            }else if (is(o, any) && is(r, any)) {
                this.compareConstAsts(r.condition,o.condition,desc);
                this.compareConstAsts(r.thenExpression,o.thenExpression,desc);
                this.compareConstAsts(r.elseExpression,o.elseExpression,desc);
            }else if (is(o, any) && is(r, any)) {
                this.compareConstAstLists(((t)=>(!!t)?t.arguments:null)(r.typeArguments),((t)=>(!!t)?t.arguments:null)(o.typeArguments),desc);
                this.compareConstAstLists(r.elements,o.elements,desc);
            }else if (is(o, any) && is(r, any)) {
                this.compareConstAstLists(((t)=>(!!t)?t.arguments:null)(r.typeArguments),((t)=>(!!t)?t.arguments:null)(o.typeArguments),desc);
                this.compareConstAstLists(r.entries,o.entries,desc);
            }else if (is(o, any) && is(r, any)) {
                this.compareConstAsts(r.target,o.target,desc);
                this.compareConstAsts(r.methodName,o.methodName,desc);
                this.compareConstAstLists(((t)=>(!!t)?t.arguments:null)(r.typeArguments),((t)=>(!!t)?t.arguments:null)(o.typeArguments),desc);
                this.compareConstAstLists(((t)=>(!!t)?t.arguments:null)(r.argumentList),((t)=>(!!t)?t.arguments:null)(o.argumentList),desc);
            }else if (is(o, any) && is(r, any)) {
                this.compareElements(r.staticElement,o.staticElement,desc);
                let oConstructor : any = o.constructorName;
                let rConstructor : any = r.constructorName;
                expect(oConstructor,isNotNull,{
                    reason : desc});
                expect(rConstructor,isNotNull,{
                    reason : desc});
                this.compareElements(rConstructor.staticElement,oConstructor.staticElement,desc);
                let oType : any = oConstructor.type;
                let rType : any = rConstructor.type;
                expect(oType,isNotNull,{
                    reason : desc});
                expect(rType,isNotNull,{
                    reason : desc});
                this.compareConstAsts(rType.name,oType.name,desc);
                this.compareConstAsts(rConstructor.name,oConstructor.name,desc);
                if ((((t)=>(!!t)?t.isNotEmpty:null)(((t)=>(!!t)?t.arguments:null)(oType.typeArguments)) || false)) {
                    this.compareConstAstLists(((t)=>(!!t)?t.arguments:null)(rType.typeArguments),((t)=>(!!t)?t.arguments:null)(oType.typeArguments),desc);
                }
                this.compareConstAstLists(r.argumentList.arguments,o.argumentList.arguments,desc);
            }else if (is(o, any) && is(r, any)) {
                expect(o.atSign.lexeme,r.atSign.lexeme,{
                    reason : desc});
                let rName : any = r.name;
                let oName : any = o.name;
                if (is(oName, any) && is(rName, any) && o.constructorName != null && o.element != null && op(Op.EQUALS,r.constructorName,null)) {
                    this.compareConstAsts(rName.prefix,oName.identifier,desc);
                    expect(rName.period.lexeme,'.',{
                        reason : desc});
                    this.compareConstAsts(rName.identifier,o.constructorName,desc);
                    expect(r.period,isNull,{
                        reason : desc});
                    expect(r.constructorName,isNull,{
                        reason : desc});
                }else {
                    this.compareConstAsts(r.name,o.name,desc);
                    expect(((t)=>(!!t)?t.lexeme:null)(r.period),((t)=>(!!t)?t.lexeme:null)(o.period),{
                        reason : desc});
                    this.compareConstAsts(r.constructorName,o.constructorName,desc);
                }
                this.compareConstAstLists(((t)=>(!!t)?t.arguments:null)(r.arguments),((t)=>(!!t)?t.arguments:null)(o.arguments),desc);
                this.compareElements(r.element,o.element,desc);
                expect(o.elementAnnotation,isNull);
                expect(r.elementAnnotation,isNull);
            }else {
                fail(`Not implemented for ${r.runtimeType} vs. ${o.runtimeType}`);
            }
        }
    }
    compareConstructorElements(resynthesized : any,original : any,desc : string) : void {
        if (op(Op.EQUALS,original,null) && op(Op.EQUALS,resynthesized,null)) {
            return;
        }
        this.compareExecutableElements(resynthesized,original,desc);
        let resynthesizedImpl : any = this.getActualElement(resynthesized,desc);
        let originalImpl : any = this.getActualElement(original,desc);
        if (original.isConst) {
            this.compareConstAstLists(resynthesizedImpl.constantInitializers,originalImpl.constantInitializers,desc);
        }
        if (op(Op.EQUALS,original.redirectedConstructor,null)) {
            expect(resynthesized.redirectedConstructor,isNull,{
                reason : desc});
        }else {
            this.compareConstructorElements(resynthesized.redirectedConstructor,original.redirectedConstructor,`${desc} redirectedConstructor`);
        }
        this.checkPossibleMember(resynthesized,original,desc);
        expect(resynthesized.nameEnd,original.nameEnd,{
            reason : desc});
        expect(resynthesized.periodOffset,original.periodOffset,{
            reason : desc});
        expect(resynthesizedImpl.isCycleFree,originalImpl.isCycleFree,{
            reason : desc});
    }
    compareConstValues(resynthesized : any,original : any,desc : string) : void {
        if (op(Op.EQUALS,original,null)) {
            expect(resynthesized,isNull,{
                reason : desc});
        }else {
            expect(resynthesized,isNotNull,{
                reason : desc});
            this.compareTypes(resynthesized.type,original.type,desc);
            expect(resynthesized.hasKnownValue,original.hasKnownValue,{
                reason : desc});
            if (original.isNull) {
                expect(resynthesized.isNull,isTrue,{
                    reason : desc});
            }else if (original.toBoolValue() != null) {
                expect(resynthesized.toBoolValue(),original.toBoolValue(),{
                    reason : desc});
            }else if (original.toIntValue() != null) {
                expect(resynthesized.toIntValue(),original.toIntValue(),{
                    reason : desc});
            }else if (original.toDoubleValue() != null) {
                expect(resynthesized.toDoubleValue(),original.toDoubleValue(),{
                    reason : desc});
            }else if (original.toListValue() != null) {
                let resynthesizedList : core.DartList<any> = resynthesized.toListValue();
                let originalList : core.DartList<any> = original.toListValue();
                expect(resynthesizedList,hasLength(originalList.length));
                for(let i : number = 0; i < originalList.length; i++){
                    this.compareConstValues(resynthesizedList[i],originalList[i],desc);
                }
            }else if (original.toMapValue() != null) {
                let resynthesizedMap : core.DartMap<any,any> = resynthesized.toMapValue();
                let originalMap : core.DartMap<any,any> = original.toMapValue();
                expect(resynthesizedMap,hasLength(originalMap.length));
                let resynthesizedKeys : core.DartList<any> = resynthesizedMap.keys.toList();
                let originalKeys : core.DartList<any> = originalMap.keys.toList();
                for(let i : number = 0; i < originalKeys.length; i++){
                    let resynthesizedKey : any = resynthesizedKeys[i];
                    let originalKey : any = originalKeys[i];
                    this.compareConstValues(resynthesizedKey,originalKey,desc);
                    let resynthesizedValue : any = resynthesizedMap.get(resynthesizedKey);
                    let originalValue : any = originalMap.get(originalKey);
                    this.compareConstValues(resynthesizedValue,originalValue,desc);
                }
            }else if (original.toStringValue() != null) {
                expect(resynthesized.toStringValue(),original.toStringValue(),{
                    reason : desc});
            }else if (original.toSymbolValue() != null) {
                expect(resynthesized.toSymbolValue(),original.toSymbolValue(),{
                    reason : desc});
            }else if (original.toTypeValue() != null) {
                fail('Not implemented');
            }
        }
    }
    compareElementAnnotations(resynthesized : any,original : any,desc : string) : void {
        if (op(Op.EQUALS,original.element,null)) {
            expect(resynthesized.element,isNull);
        }else {
            expect(resynthesized.element,isNotNull,{
                reason : desc});
            expect(resynthesized.element.kind,original.element.kind,{
                reason : desc});
            expect(resynthesized.element.location,original.element.location,{
                reason : desc});
        }
        expect(resynthesized.compilationUnit,isNotNull,{
            reason : desc});
        expect(resynthesized.compilationUnit.location,original.compilationUnit.location,{
            reason : desc});
        expect(resynthesized.annotationAst,isNotNull,{
            reason : desc});
        this.compareConstAsts(resynthesized.annotationAst,original.annotationAst,desc);
    }
    compareElements(resynthesized : any,original : any,desc : string) : void {
        let rImpl : any = this.getActualElement(resynthesized,desc);
        let oImpl : any = this.getActualElement(original,desc);
        if (op(Op.EQUALS,oImpl,null) && op(Op.EQUALS,rImpl,null)) {
            return;
        }
        if (is(oImpl, any)) {
            return;
        }
        expect(original,isNotNull);
        expect(resynthesized,isNotNull,{
            reason : desc});
        if (is(rImpl, any) && is(oImpl, any)) {
            expect(rImpl.evaluationResult,isNull);
        }else {
            let rRuntimeType : core.Type;
            if (is(rImpl, any)) {
                rRuntimeType = ConstFieldElementImpl;
            }else if (is(rImpl, any)) {
                rRuntimeType = FunctionElementImpl;
            }else {
                rRuntimeType = rImpl.runtimeType;
            }
            expect(rRuntimeType,oImpl.runtimeType);
        }
        expect(resynthesized.kind,original.kind);
        expect(resynthesized.location,original.location,{
            reason : desc});
        expect(resynthesized.name,original.name);
        expect(resynthesized.nameOffset,original.nameOffset,{
            reason : `${desc}.nameOffset`});
        expect(rImpl.codeOffset,oImpl.codeOffset,{
            reason : desc});
        expect(rImpl.codeLength,oImpl.codeLength,{
            reason : desc});
        expect(resynthesized.documentationComment,original.documentationComment,{
            reason : desc});
        this.compareMetadata(resynthesized.metadata,original.metadata,desc);
        for(let modifier of Modifier.values) {
            let got : boolean = this._hasModifier(resynthesized,modifier);
            let want : boolean = this._hasModifier(original,modifier);
            expect(got,want,{
                reason : `Mismatch in ${desc}.${modifier}: got ${got}, want ${want}`});
        }
        if (is(oImpl, any)) {
            expect(rImpl,new bare.createInstance(any,null),{
                reason : desc});
        }else {
            expect(rImpl,isNot(new bare.createInstance(any,null)),{
                reason : desc});
        }
    }
    compareExecutableElements(resynthesized : any,original : any,desc : string,_namedArguments? : {shallow? : boolean}) : void {
        let {shallow} = Object.assign({
            "shallow" : false}, _namedArguments );
        this.compareElements(resynthesized,original,desc);
        this.compareParameterElementLists(resynthesized.parameters,original.parameters,desc);
        if (!original.hasImplicitReturnType) {
            this.compareTypes(resynthesized.returnType,original.returnType,`${desc} return type`);
        }
        if (!shallow) {
            this.compareTypes(resynthesized.type,original.type,desc);
        }
        expect(resynthesized.typeParameters.length,original.typeParameters.length);
        for(let i : number = 0; i < resynthesized.typeParameters.length; i++){
            this.compareTypeParameterElements(op(Op.INDEX,resynthesized.typeParameters,i),op(Op.INDEX,original.typeParameters,i),`${desc} type parameter ${op(Op.INDEX,original.typeParameters,i).name}`);
        }
        this.compareLocalElementsOfExecutable(resynthesized,original,desc);
    }
    compareExportElements(resynthesized : any,original : any,desc : string) : void {
        this.compareUriReferencedElements(resynthesized,original,desc);
        expect(resynthesized.exportedLibrary.location,original.exportedLibrary.location);
        expect(resynthesized.combinators.length,original.combinators.length);
        for(let i : number = 0; i < resynthesized.combinators.length; i++){
            this.compareNamespaceCombinators(op(Op.INDEX,resynthesized.combinators,i),op(Op.INDEX,original.combinators,i));
        }
    }
    compareFieldElements(resynthesized : any,original : any,desc : string) : void {
        this.comparePropertyInducingElements(resynthesized,original,desc);
    }
    compareFunctionElements(resynthesized : any,original : any,desc : string,_namedArguments? : {shallow? : boolean}) : void {
        let {shallow} = Object.assign({
            "shallow" : false}, _namedArguments );
        if (op(Op.EQUALS,original,null) && op(Op.EQUALS,resynthesized,null)) {
            return;
        }
        expect(resynthesized,isNotNull,{
            reason : desc});
        this.compareExecutableElements(resynthesized,original,desc,{
            shallow : shallow});
        this.checkPossibleLocalElements(resynthesized,original);
    }
    compareFunctionTypeAliasElements(resynthesized : any,original : any,desc : string) : void {
        this.compareElements(resynthesized,original,desc);
        let rImpl : any = this.getActualElement(resynthesized,desc);
        let oImpl : any = this.getActualElement(original,desc);
        if (is(rImpl, any)) {
            if (is(oImpl, any)) {
                this.compareParameterElementLists(rImpl.parameters,oImpl.parameters,`${desc}.parameters`);
                this.compareTypes(rImpl.returnType,oImpl.returnType,`${desc}.returnType`);
            }else {
                fail(`Resynthesized a FunctionTypeAliasElementImpl, but expected a ${oImpl.runtimeType}`);
            }
        }else if (is(rImpl, any)) {
            if (is(oImpl, any)) {
                this.compareGenericFunctionTypeElements(rImpl.function,oImpl.function,`${desc}.function`);
            }else {
                fail(`Resynthesized a GenericTypeAliasElementImpl, but expected a ${oImpl.runtimeType}`);
            }
        }else {
            fail(`Resynthesized a ${rImpl.runtimeType}`);
        }
        this.compareTypes(resynthesized.type,original.type,desc);
        expect(resynthesized.typeParameters.length,original.typeParameters.length);
        for(let i : number = 0; i < resynthesized.typeParameters.length; i++){
            this.compareTypeParameterElements(op(Op.INDEX,resynthesized.typeParameters,i),op(Op.INDEX,original.typeParameters,i),`${desc}.typeParameters[${i}] /* ${op(Op.INDEX,original.typeParameters,i).name} */`);
        }
    }
    compareGenericFunctionTypeElements(resynthesized : any,original : any,desc : string) : void {
        if (op(Op.EQUALS,resynthesized,null)) {
            if (original != null) {
                fail('Failed to resynthesize generic function type');
            }
        }else if (op(Op.EQUALS,original,null)) {
            fail('Resynthesizes a generic function type when none expected');
        }
        this.compareTypeParameterElementLists(resynthesized.typeParameters,original.typeParameters,`${desc}.typeParameters`);
        this.compareParameterElementLists(resynthesized.parameters,original.parameters,`${desc}.parameters`);
        this.compareTypes(resynthesized.returnType,original.returnType,`${desc}.returnType`);
    }
    compareImportElements(resynthesized : any,original : any,desc : string) : void {
        this.compareUriReferencedElements(resynthesized,original,desc);
        expect(resynthesized.importedLibrary.location,original.importedLibrary.location,{
            reason : `${desc} importedLibrary location`});
        expect(resynthesized.prefixOffset,original.prefixOffset,{
            reason : `${desc} prefixOffset`});
        if (op(Op.EQUALS,original.prefix,null)) {
            expect(resynthesized.prefix,isNull,{
                reason : `${desc} prefix`});
        }else {
            this.comparePrefixElements(resynthesized.prefix,original.prefix,original.prefix.name);
        }
        expect(resynthesized.combinators.length,original.combinators.length,{
            reason : `${desc} combinators`});
        for(let i : number = 0; i < resynthesized.combinators.length; i++){
            this.compareNamespaceCombinators(op(Op.INDEX,resynthesized.combinators,i),op(Op.INDEX,original.combinators,i));
        }
    }
    compareLabelElements(resynthesized : any,original : any,desc : string) : void {
        expect(resynthesized.isOnSwitchMember,original.isOnSwitchMember,{
            reason : desc});
        expect(resynthesized.isOnSwitchStatement,original.isOnSwitchStatement,{
            reason : desc});
        this.compareElements(resynthesized,original,desc);
    }
    compareLineInfo(resynthesized : any,original : any) : void {
        expect(resynthesized.lineCount,original.lineCount);
        expect(resynthesized.lineStarts,original.lineStarts);
    }
    compareLocalElementsOfExecutable(resynthesized : any,original : any,desc : string) : void {
        if (isNot(original, any)) {
            let rFunctions : core.DartList<any> = resynthesized.functions;
            let oFunctions : core.DartList<any> = original.functions;
            expect(rFunctions,hasLength(oFunctions.length));
            for(let i : number = 0; i < oFunctions.length; i++){
                this.compareFunctionElements(rFunctions[i],oFunctions[i],`${desc} local function ${oFunctions[i].name}`);
            }
        }
        if (isNot(original, any)) {
            let rLabels : core.DartList<any> = resynthesized.labels;
            let oLabels : core.DartList<any> = original.labels;
            expect(rLabels,hasLength(oLabels.length));
            for(let i : number = 0; i < oLabels.length; i++){
                this.compareLabelElements(rLabels[i],oLabels[i],`${desc} label ${oLabels[i].name}`);
            }
        }
        if (isNot(original, any)) {
            let rVariables : core.DartList<any> = resynthesized.localVariables;
            let oVariables : core.DartList<any> = original.localVariables;
            expect(rVariables,hasLength(oVariables.length));
            for(let i : number = 0; i < oVariables.length; i++){
                this.compareVariableElements(rVariables[i],oVariables[i],`${desc} local variable ${oVariables[i].name}`);
            }
        }
    }
    compareMetadata(resynthesized : core.DartList<any>,original : core.DartList<any>,desc : string) : void {
        expect(resynthesized,hasLength(original.length),{
            reason : desc});
        for(let i : number = 0; i < original.length; i++){
            this.compareElementAnnotations(resynthesized[i],original[i],`${desc} annotation ${i}`);
        }
    }
    compareMethodElements(resynthesized : any,original : any,desc : string) : void {
        this.compareExecutableElements(resynthesized,original,desc);
    }
    compareNamespaceCombinators(resynthesized : any,original : any) : void {
        if (is(original, any) && is(resynthesized, any)) {
            expect(resynthesized.shownNames,original.shownNames,{
                reason : 'shownNames'});
            expect(resynthesized.offset,original.offset,{
                reason : 'offset'});
            expect(resynthesized.end,original.end,{
                reason : 'end'});
        }else if (is(original, any) && is(resynthesized, any)) {
            expect(resynthesized.hiddenNames,original.hiddenNames,{
                reason : 'hiddenNames'});
        }else if (resynthesized.runtimeType != original.runtimeType) {
            fail(`Type mismatch: expected ${original.runtimeType}, got ${resynthesized.runtimeType}`);
        }else {
            fail(`Unimplemented comparison for ${original.runtimeType}`);
        }
    }
    compareNamespaces(resynthesized : any,original : any,desc : string) : void {
        let resynthesizedMap : core.DartMap<string,any> = resynthesized.definedNames;
        let originalMap : core.DartMap<string,any> = original.definedNames;
        expect(resynthesizedMap.keys.toSet(),originalMap.keys.toSet(),{
            reason : desc});
        for(let key of originalMap.keys) {
            let resynthesizedElement : any = resynthesizedMap.get(key);
            let originalElement : any = originalMap.get(key);
            this.compareElements(resynthesizedElement,originalElement,key);
        }
    }
    compareParameterElementLists(resynthesizedParameters : core.DartList<any>,originalParameters : core.DartList<any>,desc : string) : void {
        expect(resynthesizedParameters.length,originalParameters.length);
        for(let i : number = 0; i < resynthesizedParameters.length; i++){
            this.compareParameterElements(resynthesizedParameters[i],originalParameters[i],`${desc}.parameters[${i}] /* ${originalParameters[i].name} */`);
        }
    }
    compareParameterElements(resynthesized : any,original : any,desc : string) : void {
        this.compareVariableElements(resynthesized,original,desc);
        this.compareParameterElementLists(resynthesized.parameters,original.parameters,desc);
        expect(resynthesized.parameterKind,original.parameterKind,{
            reason : desc});
        expect(resynthesized.isInitializingFormal,original.isInitializingFormal,{
            reason : desc});
        expect(is(resynthesized, any),is(original, any));
        if (is(resynthesized, any) && is(original, any)) {
            if (op(Op.EQUALS,original.field,null)) {
                expect(resynthesized.field,isNull,{
                    reason : `${desc} field`});
            }else {
                expect(resynthesized.field,isNotNull,{
                    reason : `${desc} field`});
                this.compareFieldElements(resynthesized.field,original.field,`${desc} field`);
            }
        }
        expect(resynthesized.defaultValueCode,original.defaultValueCode,{
            reason : desc});
        expect(resynthesized.isCovariant,original.isCovariant,{
            reason : `${desc} isCovariant`});
        let resynthesizedActual : any = this.getActualElement(resynthesized,desc);
        let originalActual : any = this.getActualElement(original,desc);
        expect(resynthesizedActual.isExplicitlyCovariant,originalActual.isExplicitlyCovariant,{
            reason : desc});
        this.compareFunctionElements(resynthesizedActual.initializer,originalActual.initializer,desc);
    }
    comparePrefixElements(resynthesized : any,original : any,desc : string) : void {
        this.compareElements(resynthesized,original,desc);
    }
    comparePropertyAccessorElements(resynthesized : any,original : any,desc : string) : void {
        this.compareExecutableElements(resynthesized,original,desc);
        expect(resynthesized.variable,isNotNull);
        expect(resynthesized.variable.location,original.variable.location);
    }
    comparePropertyInducingElements(resynthesized : any,original : any,desc : string) : void {
        this.compareVariableElements(resynthesized,original,desc);
        if (op(Op.EQUALS,original.getter,null)) {
            expect(resynthesized.getter,isNull);
        }else {
            expect(resynthesized.getter,isNotNull);
            expect(resynthesized.getter.location,original.getter.location);
        }
        if (op(Op.EQUALS,original.setter,null)) {
            expect(resynthesized.setter,isNull);
        }else {
            expect(resynthesized.setter,isNotNull);
            expect(resynthesized.setter.location,original.setter.location);
        }
    }
    compareTopLevelVariableElements(resynthesized : any,original : any,desc : string) : void {
        this.comparePropertyInducingElements(resynthesized,original,desc);
    }
    compareTypeImpls(resynthesized : any,original : any,desc : string) : void {
        expect(resynthesized.element.location,original.element.location,{
            reason : `${desc}.element.location`});
        expect(resynthesized.name,original.name,{
            reason : `${desc}.name`});
    }
    compareTypeParameterElementLists(resynthesized : core.DartList<any>,original : core.DartList<any>,desc : string) : void {
        let length : number = original.length;
        expect(resynthesized.length,length,{
            reason : `${desc}.length`});
        for(let i : number = 0; i < length; i++){
            this.compareTypeParameterElements(resynthesized[i],original[i],`${desc}[${i}]`);
        }
    }
    compareTypeParameterElements(resynthesized : any,original : any,desc : string) : void {
        this.compareElements(resynthesized,original,desc);
        this.compareTypes(resynthesized.type,original.type,`${desc}.type`);
        this.compareTypes(resynthesized.bound,original.bound,`${desc}.bound`);
    }
    compareTypes(resynthesized : any,original : any,desc : string) : void {
        if (op(Op.EQUALS,original,null)) {
            expect(resynthesized,isNull,{
                reason : desc});
        }else if (is(resynthesized, any) && is(original, any)) {
            this.compareTypeImpls(resynthesized,original,desc);
            expect(resynthesized.typeArguments.length,original.typeArguments.length,{
                reason : `${desc}.typeArguments.length`});
            for(let i : number = 0; i < resynthesized.typeArguments.length; i++){
                this.compareTypes(op(Op.INDEX,resynthesized.typeArguments,i),op(Op.INDEX,original.typeArguments,i),`${desc}.typeArguments[${i}] /* ${op(Op.INDEX,original.typeArguments,i).name} */`);
            }
        }else if (is(resynthesized, any) && is(original, any)) {
            this.compareTypeImpls(resynthesized,original,desc);
        }else if (is(resynthesized, any) && is(original, any)) {
            expect(resynthesized,same(original));
        }else if (is(resynthesized, any) && is(original, any)) {
            expect(resynthesized,same(original));
        }else if (is(resynthesized, any) && is(original, any)) {
            this.compareTypeImpls(resynthesized,original,desc);
            expect(resynthesized.isInstantiated,original.isInstantiated,{
                reason : desc});
            if (original.element.isSynthetic && is(original.element, any) && is(resynthesized.element, any)) {
                this.compareFunctionTypeAliasElements(resynthesized.element,original.element,desc);
            }
            if (op(Op.EQUALS,original.element.enclosingElement,null) && is(original.element, any)) {
                expect(resynthesized.element,new bare.createInstance(any,null));
                expect(resynthesized.element.enclosingElement,isNull,{
                    reason : desc});
                this.compareFunctionElements(resynthesized.element,original.element,`${desc}.element`,{
                    shallow : true});
                expect(resynthesized.element.type,same(resynthesized));
            }
            expect(resynthesized.typeArguments.length,original.typeArguments.length,{
                reason : `${desc}.typeArguments.length`});
            for(let i : number = 0; i < resynthesized.typeArguments.length; i++){
                if (op(Op.INDEX,resynthesized.typeArguments,i).isDynamic && is(op(Op.INDEX,original.typeArguments,i), any)) {
                    expect(this.isTypeParameterUsed(op(Op.INDEX,original.typeArguments,i),original.element.type),isFalse);
                }else {
                    this.compareTypes(op(Op.INDEX,resynthesized.typeArguments,i),op(Op.INDEX,original.typeArguments,i),`${desc}.typeArguments[${i}] /* ${op(Op.INDEX,original.typeArguments,i).name} */`);
                }
            }
            if (op(Op.EQUALS,original.typeParameters,null)) {
                expect(resynthesized.typeParameters,isNull,{
                    reason : desc});
            }else {
                expect(resynthesized.typeParameters,isNotNull,{
                    reason : desc});
                expect(resynthesized.typeParameters.length,original.typeParameters.length,{
                    reason : desc});
                for(let i : number = 0; i < resynthesized.typeParameters.length; i++){
                    this.compareTypeParameterElements(op(Op.INDEX,resynthesized.typeParameters,i),op(Op.INDEX,original.typeParameters,i),`${desc}.typeParameters[${i}]`);
                }
            }
            expect(resynthesized.typeFormals.length,original.typeFormals.length,{
                reason : desc});
            for(let i : number = 0; i < resynthesized.typeFormals.length; i++){
                this.compareTypeParameterElements(op(Op.INDEX,resynthesized.typeFormals,i),op(Op.INDEX,original.typeFormals,i),`${desc}.typeFormals[${i}]`);
            }
        }else if (is(resynthesized, any) && is(original, any)) {
            expect(resynthesized,same(original));
        }else if (is(resynthesized, any) && is(original, any)) {
        }else if (is(resynthesized, any) && is(original, any)) {
            expect(resynthesized,same(original));
        }else if (resynthesized.runtimeType != original.runtimeType) {
            fail(`Type mismatch: expected ${original.runtimeType},` + ` got ${resynthesized.runtimeType} (${desc})`);
        }else {
            fail(`Unimplemented comparison for ${original.runtimeType}`);
        }
    }
    compareUriReferencedElements(resynthesized : any,original : any,desc : string) : void {
        this.compareElements(resynthesized,original,desc);
        expect(resynthesized.uri,original.uri,{
            reason : `${desc}.uri`});
        expect(resynthesized.uriOffset,original.uriOffset,{
            reason : `${desc}.uriOffset`});
        expect(resynthesized.uriEnd,original.uriEnd,{
            reason : `${desc}.uriEnd`});
    }
    compareVariableElements(resynthesized : any,original : any,desc : string) : void {
        this.compareElements(resynthesized,original,desc);
        this.compareTypes(resynthesized.type,original.type,`${desc}.type`);
        let resynthesizedActual : any = this.getActualElement(resynthesized,desc);
        let originalActual : any = this.getActualElement(original,desc);
        this.compareFunctionElements(resynthesizedActual.initializer,originalActual.initializer,`${desc}.initializer`);
        if (is(originalActual, any)) {
            let oEnclosing : any = original.enclosingElement;
            if (is(oEnclosing, any) && oEnclosing.isEnum) {
                this.compareConstValues(resynthesized.constantValue,original.constantValue,`${desc}.constantValue`);
            }else {
                let initializer : any = resynthesizedActual.constantInitializer;
                if (this.variablesWithNotConstInitializers.contains(resynthesized.name)) {
                    this._assertUnresolvedIdentifier(initializer,desc);
                }else {
                    this.compareConstAsts(initializer,originalActual.constantInitializer,`${desc}.constantInitializer`);
                }
            }
        }
        this.checkPossibleMember(resynthesized,original,desc);
        this.checkPossibleLocalElements(resynthesized,original);
    }
    createDartSdk() : any {
        return lib5.AbstractContextTest.SHARED_MOCK_SDK;
    }
    createOptions() : any {
        return ((_) : any =>  {
            {
                _.enableAssertInitializer = true;
                return _;
            }
        })(new bare.createInstance(any,null));
    }
    getActualElement(element : any,desc : string) : any {
        if (op(Op.EQUALS,element,null)) {
            return null;
        }else if (is(element, any)) {
            return element;
        }else if (is(element, any)) {
            let actualElement : any = element.actualElement;
            expect(actualElement,isNot(new bare.createInstance(any,null)),{
                reason : desc});
            return this.getActualElement(actualElement,desc);
        }else if (is(element, any)) {
            return this.getActualElement(element.baseElement,desc);
        }else {
            fail(`Unexpected type for resynthesized (${desc}):` + ` ${element.runtimeType}`);
            return null;
        }
    }
    isTypeParameterUsed(typeParameter : any,type : any) : boolean {
        if (is(type, any)) {
            return this.isTypeParameterUsed(typeParameter,type.returnType) || type.parameters.any((e : any) =>  {
                return this.isTypeParameterUsed(typeParameter,e.type);
            });
        }else if (is(type, any)) {
            return type.typeArguments.any((t : any) =>  {
                return this.isTypeParameterUsed(typeParameter,t);
            });
        }else if (is(type, any)) {
            return op(Op.EQUALS,type,typeParameter);
        }else {
            expect(type.isDynamic || type.isVoid,isTrue);
            return false;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.prepareAnalysisContext(this.createOptions());
    }
    _assertUnresolvedIdentifier(initializer : any,desc : string) : void {
        expect(initializer,new bare.createInstance(any,null),{
            reason : desc});
        let identifier : any = initializer;
        expect(identifier.staticElement,isNull,{
            reason : desc});
    }
    _getSortedPropertyAccessors(classElement : any) : core.DartList<any> {
        let accessors : core.DartList<any> = classElement.accessors.toList();
        accessors.sort((a : any,b : any) =>  {
            return a.displayName.compareTo(b.displayName);
        });
        return accessors;
    }
    _hasModifier(element : any,modifier : any) : boolean {
        if (op(Op.EQUALS,modifier,Modifier.ABSTRACT)) {
            if (is(element, any)) {
                return element.isAbstract;
            }
            if (is(element, any)) {
                return element.isAbstract;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.ASYNCHRONOUS)) {
            if (is(element, any)) {
                return element.isAsynchronous;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.CONST)) {
            if (is(element, any)) {
                return element.isConst;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.COVARIANT)) {
            if (is(element, any)) {
                return element.isExplicitlyCovariant;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.DEFERRED)) {
            if (is(element, any)) {
                return element.isDeferred;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.ENUM)) {
            if (is(element, any)) {
                return element.isEnum;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.EXTERNAL)) {
            if (is(element, any)) {
                return element.isExternal;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.FACTORY)) {
            if (is(element, any)) {
                return element.isFactory;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.FINAL)) {
            if (is(element, any)) {
                return element.isFinal;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.GENERATOR)) {
            if (is(element, any)) {
                return element.isGenerator;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.GETTER)) {
            if (is(element, any)) {
                return element.isGetter;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.HAS_EXT_URI)) {
            if (is(element, any)) {
                return element.hasExtUri;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.IMPLICIT_TYPE)) {
            if (is(element, any)) {
                return element.hasImplicitReturnType;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.MIXIN_APPLICATION)) {
            if (is(element, any)) {
                return element.isMixinApplication;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.REFERENCES_SUPER)) {
            if (is(element, any)) {
                return element.hasReferenceToSuper;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.SETTER)) {
            if (is(element, any)) {
                return element.isSetter;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.STATIC)) {
            if (is(element, any)) {
                return element.isStatic;
            }else if (is(element, any)) {
                return element.isStatic;
            }
            return false;
        }else if (op(Op.EQUALS,modifier,Modifier.SYNTHETIC)) {
            return element.isSynthetic;
        }
        throw new core.UnimplementedError(`Modifier ${modifier} for ${((t)=>(!!t)?t.runtimeType:null)(element)}`);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AbstractResynthesizeTest() {
        this.otherLibrarySources = new core.DartSet<any>();
        this.variablesWithNotConstInitializers = new core.DartSet<string>();
        this.namesThatCannotBeResolved = new core.DartSet<string>();
        this.allowMissingFiles = false;
        this.shouldCompareLibraryElements = true;
    }
}

export namespace TestSummaryResynthesizer {
    export type Constructors = 'TestSummaryResynthesizer';
    export type Interface = Omit<TestSummaryResynthesizer, Constructors>;
}
@DartClass
export class TestSummaryResynthesizer extends any {
    unlinkedSummaries : core.DartMap<string,any>;

    linkedSummaries : core.DartMap<string,any>;

    allowMissingFiles : boolean;

    unlinkedSummariesRequested : core.DartSet<string>;

    linkedSummariesRequested : core.DartSet<string>;

    constructor(context : any,unlinkedSummaries : core.DartMap<string,any>,linkedSummaries : core.DartMap<string,any>,allowMissingFiles : boolean) {
    }
    @defaultConstructor
    TestSummaryResynthesizer(context : any,unlinkedSummaries : core.DartMap<string,any>,linkedSummaries : core.DartMap<string,any>,allowMissingFiles : boolean) {
        this.unlinkedSummariesRequested = new core.DartSet<string>();
        this.linkedSummariesRequested = new core.DartSet<string>();
        super.DartObject(context,context.sourceFactory,context.analysisOptions.strongMode);
        this.unlinkedSummaries = unlinkedSummaries;
        this.linkedSummaries = linkedSummaries;
        this.allowMissingFiles = allowMissingFiles;
        this.unlinkedSummariesRequested.clear();
        this.linkedSummariesRequested.clear();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLinkedSummary(uri : string) : any {
        this.linkedSummariesRequested.add(uri);
        let serializedLibrary : any = this.linkedSummaries.get(uri);
        if (op(Op.EQUALS,serializedLibrary,null) && !this.allowMissingFiles) {
            fail(`Unexpectedly tried to get linked summary for ${uri}`);
        }
        return serializedLibrary;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getUnlinkedSummary(uri : string) : any {
        this.unlinkedSummariesRequested.add(uri);
        let serializedUnit : any = this.unlinkedSummaries.get(uri);
        if (op(Op.EQUALS,serializedUnit,null) && !this.allowMissingFiles) {
            fail(`Unexpectedly tried to get unlinked summary for ${uri}`);
        }
        return serializedUnit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hasLibrarySummary(uri : string) : boolean {
        return true;
    }
}

export namespace ResynthesizeTest {
    export type Constructors = AbstractResynthesizeTest.Constructors | 'ResynthesizeTest';
    export type Interface = Omit<ResynthesizeTest, Constructors>;
}
@DartClass
export class ResynthesizeTest extends AbstractResynthesizeTest {
    @Abstract
    checkLibrary(text : string,_namedArguments? : {allowErrors? : boolean,dumpSummaries? : boolean}) : any{ throw 'abstract'}
    @Abstract
    encodeDecodeLibrarySource(librarySource : any) : any{ throw 'abstract'}
    fail_library_hasExtUri() {
        let library = this.checkLibrary('import "dart-ext:doesNotExist.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'');
        }else {
            lib6.checkElementText(library,'');
        }
    }
    test_class_abstract() {
        let library = this.checkLibrary('abstract class C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'abstract class C {
        }else {
            lib6.checkElementText(library,'abstract class C {
        }
    }
    test_class_alias() {
        let library = this.checkLibrary('class C = D with E, F; class D {} class E {} class F {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class alias C extends D with E, F {
        }else {
            lib6.checkElementText(library,'class alias C extends D with E, F {
        }
    }
    test_class_alias_abstract() {
        let library = this.checkLibrary('abstract class C = D with E; class D {} class E {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'abstract class alias C extends D with E {
        }else {
            lib6.checkElementText(library,'abstract class alias C extends D with E {
        }
    }
    test_class_alias_documented() {
        let library = this.checkLibrary('// Extra comment so doc comment offset != 0
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/**
        }else {
            lib6.checkElementText(library,'/**
        }
    }
    test_class_alias_with_forwarding_constructors() {
        this.addLibrarySource('/a.dart','class Base {
        let library = this.checkLibrary('import "a.dart";
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_class_alias_with_forwarding_constructors_type_substitution() {
        let library = this.checkLibrary('class Base<T> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class Base<T> {
        }else {
            lib6.checkElementText(library,'class Base<T> {
        }
    }
    test_class_alias_with_forwarding_constructors_type_substitution_complex() {
        let library = this.checkLibrary('class Base<T> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class Base<T> {
        }else {
            lib6.checkElementText(library,'class Base<T> {
        }
    }
    test_class_alias_with_mixin_members() {
        let library = this.checkLibrary('class C = D with E;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class alias C extends D with E {
        }else {
            lib6.checkElementText(library,'class alias C extends D with E {
        }
    }
    test_class_constructor_const() {
        let library = this.checkLibrary('class C { const C(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_const_external() {
        let library = this.checkLibrary('class C { external const C(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_explicit_named() {
        let library = this.checkLibrary('class C { C.foo(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_explicit_type_params() {
        let library = this.checkLibrary('class C<T, U> { C(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {
        }else {
            lib6.checkElementText(library,'class C<T, U> {
        }
    }
    test_class_constructor_explicit_unnamed() {
        let library = this.checkLibrary('class C { C(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_external() {
        let library = this.checkLibrary('class C { external C(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_factory() {
        let library = this.checkLibrary('class C { factory C() => null; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_field_formal_dynamic_dynamic() {
        let library = this.checkLibrary('class C { dynamic x; C(dynamic this.x); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_field_formal_dynamic_typed() {
        let library = this.checkLibrary('class C { dynamic x; C(int this.x); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_field_formal_dynamic_untyped() {
        let library = this.checkLibrary('class C { dynamic x; C(this.x); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_field_formal_multiple_matching_fields() {
        let library = this.checkLibrary('class C { C(this.x); int x; String x; }',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_field_formal_no_matching_field() {
        let library = this.checkLibrary('class C { C(this.x); }',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_field_formal_typed_dynamic() {
        let library = this.checkLibrary('class C { num x; C(dynamic this.x); }',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_field_formal_typed_typed() {
        let library = this.checkLibrary('class C { num x; C(int this.x); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_field_formal_typed_untyped() {
        let library = this.checkLibrary('class C { num x; C(this.x); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_field_formal_untyped_dynamic() {
        let library = this.checkLibrary('class C { var x; C(dynamic this.x); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_field_formal_untyped_typed() {
        let library = this.checkLibrary('class C { var x; C(int this.x); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_field_formal_untyped_untyped() {
        let library = this.checkLibrary('class C { var x; C(this.x); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_fieldFormal_named_noDefault() {
        let library = this.checkLibrary('class C { int x; C({this.x}); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_fieldFormal_named_withDefault() {
        let library = this.checkLibrary('class C { int x; C({this.x: 42}); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_fieldFormal_optional_noDefault() {
        let library = this.checkLibrary('class C { int x; C([this.x]); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_fieldFormal_optional_withDefault() {
        let library = this.checkLibrary('class C { int x; C([this.x = 42]); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_implicit() {
        let library = this.checkLibrary('class C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructor_implicit_type_params() {
        let library = this.checkLibrary('class C<T, U> {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {
        }else {
            lib6.checkElementText(library,'class C<T, U> {
        }
    }
    test_class_constructor_params() {
        let library = this.checkLibrary('class C { C(x, int y); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_constructors() {
        let library = this.checkLibrary('class C { C.foo(); C.bar(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_documented() {
        let library = this.checkLibrary('// Extra comment so doc comment offset != 0
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/**
        }else {
            lib6.checkElementText(library,'/**
        }
    }
    test_class_documented_tripleSlash() {
        let library = this.checkLibrary('/// aaa
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/// aaa
        }else {
            lib6.checkElementText(library,'/// aaa
        }
    }
    test_class_documented_with_references() {
        let library = this.checkLibrary('/**
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/**
        }else {
            lib6.checkElementText(library,'/**
        }
    }
    test_class_documented_with_windows_line_endings() {
        let library = this.checkLibrary('/**
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/**
        }else {
            lib6.checkElementText(library,'/**
        }
    }
    test_class_field_const() {
        let library = this.checkLibrary('class C { static const int i = 0; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_field_implicit_type() {
        let library = this.checkLibrary('class C { var x; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_field_static() {
        let library = this.checkLibrary('class C { static int i; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_fields() {
        let library = this.checkLibrary('class C { int i; int j; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_getter_abstract() {
        let library = this.checkLibrary('abstract class C { int get x; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'abstract class C {
        }else {
            lib6.checkElementText(library,'abstract class C {
        }
    }
    test_class_getter_external() {
        let library = this.checkLibrary('class C { external int get x; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_getter_implicit_return_type() {
        let library = this.checkLibrary('class C { get x => null; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_getter_static() {
        let library = this.checkLibrary('class C { static int get x => null; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_getters() {
        let library = this.checkLibrary('class C { int get x => null; get y => null; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_implicitField_getterFirst() {
        let library = this.checkLibrary('class C { int get x => 0; void set x(int value) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_implicitField_setterFirst() {
        let library = this.checkLibrary('class C { void set x(int value) {} int get x => 0; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_interfaces() {
        let library = this.checkLibrary('class C implements D, E {} class D {} class E {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C implements D, E {
        }else {
            lib6.checkElementText(library,'class C implements D, E {
        }
    }
    test_class_interfaces_unresolved() {
        let library = this.checkLibrary('class C implements X, Y, Z {} class X {} class Z {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C implements X, Z {
        }else {
            lib6.checkElementText(library,'class C implements X, Z {
        }
    }
    test_class_method_abstract() {
        let library = this.checkLibrary('abstract class C { f(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'abstract class C {
        }else {
            lib6.checkElementText(library,'abstract class C {
        }
    }
    test_class_method_external() {
        let library = this.checkLibrary('class C { external f(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_method_params() {
        let library = this.checkLibrary('class C { f(x, y) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_method_static() {
        let library = this.checkLibrary('class C { static f() {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_methods() {
        let library = this.checkLibrary('class C { f() {} g() {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_mixins() {
        let library = this.checkLibrary('class C extends Object with D, E {} class D {} class E {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends Object with D, E {
        }else {
            lib6.checkElementText(library,'class C extends Object with D, E {
        }
    }
    test_class_mixins_unresolved() {
        let library = this.checkLibrary('class C extends Object with X, Y, Z; class X {} class Z {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends Object with X, Z {
        }else {
            lib6.checkElementText(library,'class C extends Object with X, Z {
        }
    }
    test_class_setter_abstract() {
        let library = this.checkLibrary('abstract class C { void set x(int value); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'abstract class C {
        }else {
            lib6.checkElementText(library,'abstract class C {
        }
    }
    test_class_setter_external() {
        let library = this.checkLibrary('class C { external void set x(int value); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_setter_implicit_param_type() {
        let library = this.checkLibrary('class C { void set x(value) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_setter_implicit_return_type() {
        let library = this.checkLibrary('class C { set x(int value) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_setter_invalid_no_parameter() {
        let library = this.checkLibrary('class C { void set x() {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_setter_static() {
        let library = this.checkLibrary('class C { static void set x(int value) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_setters() {
        let library = this.checkLibrary('class C { void set x(int value) {} set y(value) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_supertype() {
        let library = this.checkLibrary('class C extends D {} class D {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends D {
        }else {
            lib6.checkElementText(library,'class C extends D {
        }
    }
    test_class_supertype_unresolved() {
        let library = this.checkLibrary('class C extends D {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_class_type_parameters() {
        let library = this.checkLibrary('class C<T, U> {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {
        }else {
            lib6.checkElementText(library,'class C<T, U> {
        }
    }
    test_class_type_parameters_bound() {
        let library = this.checkLibrary('class C<T extends Object, U extends D> {} class D {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T extends Object, U extends D> {
        }else {
            lib6.checkElementText(library,'class C<T extends Object, U extends D> {
        }
    }
    test_class_type_parameters_f_bound_complex() {
        let library = this.checkLibrary('class C<T extends List<U>, U> {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T extends List<U>, U> {
        }else {
            lib6.checkElementText(library,'class C<T extends List<U>, U> {
        }
    }
    test_class_type_parameters_f_bound_simple() {
        let library = this.checkLibrary('class C<T extends U, U> {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T extends U, U> {
        }else {
            lib6.checkElementText(library,'class C<T extends U, U> {
        }
    }
    test_classes() {
        let library = this.checkLibrary('class C {} class D {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_closure_executable_with_return_type_from_closure() {
        let library = this.checkLibrary('f() {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f() {}
        }else {
            lib6.checkElementText(library,'dynamic f() {}
        }
    }
    test_closure_generic() {
        let library = this.checkLibrary('final f = <U, V>(U x, V y) => y;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'final <U,V>(U, V) → V f;
        }else {
            lib6.checkElementText(library,'final dynamic f;
        }
    }
    test_closure_in_variable_declaration_in_part() {
        this.addSource('/a.dart','part of lib; final f = (int i) => i.toDouble();');
        let library = this.checkLibrary('library lib;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library lib;
        }else {
            lib6.checkElementText(library,'library lib;
        }
    }
    test_const_invalid_field_const() {
        this.variablesWithNotConstInitializers.add('f');
        let library = this.checkLibrary('class C {
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_const_invalid_field_final() {
        this.variablesWithNotConstInitializers.add('f');
        let library = this.checkLibrary('class C {
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_const_invalid_topLevel() {
        this.variablesWithNotConstInitializers.add('v');
        let library = this.checkLibrary('const v = 1 + foo();
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const int v =
        }else {
            lib6.checkElementText(library,'const dynamic v =
        }
    }
    test_const_invokeConstructor_generic_named() {
        let library = this.checkLibrary('class C<K, V> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<K, V> {
        }else {
            lib6.checkElementText(library,'class C<K, V> {
        }
    }
    test_const_invokeConstructor_generic_named_imported() {
        this.addLibrarySource('/a.dart','class C<K, V> {
        let library = this.checkLibrary('import \'a.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_const_invokeConstructor_generic_named_imported_withPrefix() {
        this.addLibrarySource('/a.dart','class C<K, V> {
        let library = this.checkLibrary('import \'a.dart\' as p;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }
    }
    test_const_invokeConstructor_generic_noTypeArguments() {
        let library = this.checkLibrary('class C<K, V> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<K, V> {
        }else {
            lib6.checkElementText(library,'class C<K, V> {
        }
    }
    test_const_invokeConstructor_generic_unnamed() {
        let library = this.checkLibrary('class C<K, V> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<K, V> {
        }else {
            lib6.checkElementText(library,'class C<K, V> {
        }
    }
    test_const_invokeConstructor_generic_unnamed_imported() {
        this.addLibrarySource('/a.dart','class C<K, V> {
        let library = this.checkLibrary('import \'a.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_const_invokeConstructor_generic_unnamed_imported_withPrefix() {
        this.addLibrarySource('/a.dart','class C<K, V> {
        let library = this.checkLibrary('import \'a.dart\' as p;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }
    }
    test_const_invokeConstructor_named() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_const_invokeConstructor_named_imported() {
        this.addLibrarySource('/a.dart','class C {
        let library = this.checkLibrary('import \'a.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_const_invokeConstructor_named_imported_withPrefix() {
        this.addLibrarySource('/a.dart','class C {
        let library = this.checkLibrary('import \'a.dart\' as p;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }
    }
    test_const_invokeConstructor_named_unresolved() {
        let library = this.checkLibrary('class C {}
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_const_invokeConstructor_named_unresolved2() {
        let library = this.checkLibrary('const V = const C.named();
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic V = const
        }else {
            lib6.checkElementText(library,'const dynamic V = const
        }
    }
    test_const_invokeConstructor_named_unresolved3() {
        this.addLibrarySource('/a.dart','class C {
        let library = this.checkLibrary('import \'a.dart\' as p;
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }
    }
    test_const_invokeConstructor_named_unresolved4() {
        this.addLibrarySource('/a.dart','');
        let library = this.checkLibrary('import \'a.dart\' as p;
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }
    }
    test_const_invokeConstructor_named_unresolved5() {
        let library = this.checkLibrary('const V = const p.C.named();
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic V = const
        }else {
            lib6.checkElementText(library,'const dynamic V = const
        }
    }
    test_const_invokeConstructor_named_unresolved6() {
        let library = this.checkLibrary('class C<T> {}
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> {
        }else {
            lib6.checkElementText(library,'class C<T> {
        }
    }
    test_const_invokeConstructor_unnamed() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_const_invokeConstructor_unnamed_imported() {
        this.addLibrarySource('/a.dart','class C {
        let library = this.checkLibrary('import \'a.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_const_invokeConstructor_unnamed_imported_withPrefix() {
        this.addLibrarySource('/a.dart','class C {
        let library = this.checkLibrary('import \'a.dart\' as p;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }
    }
    test_const_invokeConstructor_unnamed_unresolved() {
        let library = this.checkLibrary('const V = const C();
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic V = const
        }else {
            lib6.checkElementText(library,'const dynamic V = const
        }
    }
    test_const_invokeConstructor_unnamed_unresolved2() {
        this.shouldCompareLibraryElements = false;
        this.addLibrarySource('/a.dart','');
        let library = this.checkLibrary('import \'a.dart\' as p;
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }
    }
    test_const_invokeConstructor_unnamed_unresolved3() {
        let library = this.checkLibrary('const V = const p.C();
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic V = const
        }else {
            lib6.checkElementText(library,'const dynamic V = const
        }
    }
    test_const_length_ofClassConstField() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_const_length_ofClassConstField_imported() {
        this.addLibrarySource('/a.dart','class C {
        let library = this.checkLibrary('import \'a.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_const_length_ofClassConstField_imported_withPrefix() {
        this.addLibrarySource('/a.dart','class C {
        let library = this.checkLibrary('import \'a.dart\' as p;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }
    }
    test_const_length_ofStringLiteral() {
        let library = this.checkLibrary('const v = \'abc\'.length;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic v/*error: instanceGetter*/ = \'abc\'.
        }else {
            lib6.checkElementText(library,'const dynamic v = \'abc\'.
        }
    }
    test_const_length_ofTopLevelVariable() {
        let library = this.checkLibrary('const String S = \'abc\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const String S = \'abc\';
        }else {
            lib6.checkElementText(library,'const String S = \'abc\';
        }
    }
    test_const_length_ofTopLevelVariable_imported() {
        this.addLibrarySource('/a.dart','const String S = \'abc\';
        let library = this.checkLibrary('import \'a.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_const_length_ofTopLevelVariable_imported_withPrefix() {
        this.addLibrarySource('/a.dart','const String S = \'abc\';
        let library = this.checkLibrary('import \'a.dart\' as p;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }
    }
    test_const_length_staticMethod() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_const_parameterDefaultValue_initializingFormal_functionTyped() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_const_parameterDefaultValue_initializingFormal_named() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_const_parameterDefaultValue_initializingFormal_positional() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_const_parameterDefaultValue_normal() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_const_reference_staticField() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_const_reference_staticField_imported() {
        this.addLibrarySource('/a.dart','class C {
        let library = this.checkLibrary('import \'a.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_const_reference_staticField_imported_withPrefix() {
        this.addLibrarySource('/a.dart','class C {
        let library = this.checkLibrary('import \'a.dart\' as p;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }
    }
    test_const_reference_staticMethod() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_const_reference_staticMethod_imported() {
        this.addLibrarySource('/a.dart','class C {
        let library = this.checkLibrary('import \'a.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_const_reference_staticMethod_imported_withPrefix() {
        this.addLibrarySource('/a.dart','class C {
        let library = this.checkLibrary('import \'a.dart\' as p;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }
    }
    test_const_reference_topLevelFunction() {
        let library = this.checkLibrary('foo() {}
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const () → dynamic V =
        }else {
            lib6.checkElementText(library,'const dynamic V =
        }
    }
    test_const_reference_topLevelFunction_imported() {
        this.addLibrarySource('/a.dart','foo() {}
        let library = this.checkLibrary('import \'a.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_const_reference_topLevelFunction_imported_withPrefix() {
        this.addLibrarySource('/a.dart','foo() {}
        let library = this.checkLibrary('import \'a.dart\' as p;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }
    }
    test_const_reference_topLevelVariable() {
        let library = this.checkLibrary('const A = 1;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const int A = 1;
        }else {
            lib6.checkElementText(library,'const dynamic A = 1;
        }
    }
    test_const_reference_topLevelVariable_imported() {
        this.addLibrarySource('/a.dart','const A = 1;
        let library = this.checkLibrary('import \'a.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_const_reference_topLevelVariable_imported_withPrefix() {
        this.addLibrarySource('/a.dart','const A = 1;
        let library = this.checkLibrary('import \'a.dart\' as p;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }
    }
    test_const_reference_type() {
        let library = this.checkLibrary('class C {}
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F(int a, String b);
        }else {
            lib6.checkElementText(library,'typedef dynamic F(int a, String b);
        }
    }
    test_const_reference_type_functionType() {
        let library = this.checkLibrary('typedef F();
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F();
        }else {
            lib6.checkElementText(library,'typedef dynamic F();
        }
    }
    test_const_reference_type_imported() {
        this.addLibrarySource('/a.dart','class C {}
        let library = this.checkLibrary('import \'a.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_const_reference_type_imported_withPrefix() {
        this.addLibrarySource('/a.dart','class C {}
        let library = this.checkLibrary('import \'a.dart\' as p;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }
    }
    test_const_reference_type_typeParameter() {
        let library = this.checkLibrary('class C<T> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> {
        }else {
            lib6.checkElementText(library,'class C<T> {
        }
    }
    test_const_reference_unresolved_prefix0() {
        let library = this.checkLibrary('const V = foo;
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic V =
        }else {
            lib6.checkElementText(library,'const dynamic V =
        }
    }
    test_const_reference_unresolved_prefix1() {
        let library = this.checkLibrary('class C {}
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_const_reference_unresolved_prefix2() {
        this.addLibrarySource('/foo.dart','class C {}
        let library = this.checkLibrary('import \'foo.dart\' as p;
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\' as p;
        }else {
            lib6.checkElementText(library,'import \'foo.dart\' as p;
        }
    }
    test_const_topLevel_binary() {
        let library = this.checkLibrary('const vEqual = 1 == 2;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const bool vEqual = 1 == 2;
        }else {
            lib6.checkElementText(library,'const dynamic vEqual = 1 == 2;
        }
    }
    test_const_topLevel_conditional() {
        let library = this.checkLibrary('const vConditional = (1 == 2) ? 11 : 22;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const int vConditional = 1 == 2 ? 11 : 22;
        }else {
            lib6.checkElementText(library,'const dynamic vConditional = 1 == 2 ? 11 : 22;
        }
    }
    test_const_topLevel_identical() {
        let library = this.checkLibrary('const vIdentical = (1 == 2) ? 11 : 22;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const int vIdentical = 1 == 2 ? 11 : 22;
        }else {
            lib6.checkElementText(library,'const dynamic vIdentical = 1 == 2 ? 11 : 22;
        }
    }
    test_const_topLevel_ifNull() {
        let library = this.checkLibrary('const vIfNull = 1 ?? 2.0;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const num vIfNull = 1 ?? 2.0;
        }else {
            lib6.checkElementText(library,'const dynamic vIfNull = 1 ?? 2.0;
        }
    }
    test_const_topLevel_literal() {
        let library = this.checkLibrary('const vNull = null;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic vNull = null;
        }else {
            lib6.checkElementText(library,'const dynamic vNull = null;
        }
    }
    test_const_topLevel_prefix() {
        let library = this.checkLibrary('const vNotEqual = 1 != 2;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const bool vNotEqual = 1 != 2;
        }else {
            lib6.checkElementText(library,'const dynamic vNotEqual = 1 != 2;
        }
    }
    test_const_topLevel_super() {
        let library = this.checkLibrary('const vSuper = super;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic vSuper = super;
        }else {
            lib6.checkElementText(library,'const dynamic vSuper = super;
        }
    }
    test_const_topLevel_this() {
        let library = this.checkLibrary('const vThis = this;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic vThis = this;
        }else {
            lib6.checkElementText(library,'const dynamic vThis = this;
        }
    }
    test_const_topLevel_typedList() {
        let library = this.checkLibrary('const vNull = const <Null>[];
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const List<Null> vNull = const <
        }else {
            lib6.checkElementText(library,'const dynamic vNull = const <
        }
    }
    test_const_topLevel_typedList_imported() {
        this.addLibrarySource('/a.dart','class C {}');
        let library = this.checkLibrary('import \'a.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_const_topLevel_typedList_importedWithPrefix() {
        this.addLibrarySource('/a.dart','class C {}');
        let library = this.checkLibrary('import \'a.dart\' as p;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as p;
        }
    }
    test_const_topLevel_typedMap() {
        let library = this.checkLibrary('const vDynamic1 = const <dynamic, int>{};
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const Map<dynamic, int> vDynamic1 = const <
        }else {
            lib6.checkElementText(library,'const dynamic vDynamic1 = const <
        }
    }
    test_const_topLevel_untypedList() {
        let library = this.checkLibrary('const v = const [1, 2, 3];
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const List<int> v = const [1, 2, 3];
        }else {
            lib6.checkElementText(library,'const dynamic v = const [1, 2, 3];
        }
    }
    test_const_topLevel_untypedMap() {
        let library = this.checkLibrary('const v = const {0: \'aaa\', 1: \'bbb\', 2: \'ccc\'};
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const Map<int, String> v = const {0: \'aaa\', 1: \'bbb\', 2: \'ccc\'};
        }else {
            lib6.checkElementText(library,'const dynamic v = const {0: \'aaa\', 1: \'bbb\', 2: \'ccc\'};
        }
    }
    test_constExpr_pushReference_enum_field() {
        let library = this.checkLibrary('enum E {a, b, c}
        if (this.isStrongMode) {
            lib6.checkElementText(library,'enum E {
        }else {
            lib6.checkElementText(library,'enum E {
        }
    }
    test_constExpr_pushReference_enum_method() {
        let library = this.checkLibrary('enum E {a}
        if (this.isStrongMode) {
            lib6.checkElementText(library,'enum E {
        }else {
            lib6.checkElementText(library,'enum E {
        }
    }
    test_constExpr_pushReference_field_simpleIdentifier() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_constExpr_pushReference_staticMethod_simpleIdentifier() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_constructor_documented() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_constructor_initializers_assertInvocation() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_constructor_initializers_assertInvocation_message() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_constructor_initializers_field() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_constructor_initializers_field_notConst() {
        this.variablesWithNotConstInitializers.add('x');
        let library = this.checkLibrary('class C {
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_constructor_initializers_field_withParameter() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_constructor_initializers_superInvocation_named() {
        let library = this.checkLibrary('class A {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class A {
        }else {
            lib6.checkElementText(library,'class A {
        }
    }
    test_constructor_initializers_superInvocation_namedExpression() {
        let library = this.checkLibrary('class A {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class A {
        }else {
            lib6.checkElementText(library,'class A {
        }
    }
    test_constructor_initializers_superInvocation_unnamed() {
        let library = this.checkLibrary('class A {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class A {
        }else {
            lib6.checkElementText(library,'class A {
        }
    }
    test_constructor_initializers_thisInvocation_named() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_constructor_initializers_thisInvocation_namedExpression() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_constructor_initializers_thisInvocation_unnamed() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_constructor_redirected_factory_named() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_constructor_redirected_factory_named_generic() {
        let library = this.checkLibrary('class C<T, U> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {
        }else {
            lib6.checkElementText(library,'class C<T, U> {
        }
    }
    test_constructor_redirected_factory_named_imported() {
        this.addLibrarySource('/foo.dart','import \'test.dart\';
        let library = this.checkLibrary('import \'foo.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\';
        }else {
            lib6.checkElementText(library,'import \'foo.dart\';
        }
    }
    test_constructor_redirected_factory_named_imported_generic() {
        this.addLibrarySource('/foo.dart','import \'test.dart\';
        let library = this.checkLibrary('import \'foo.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\';
        }else {
            lib6.checkElementText(library,'import \'foo.dart\';
        }
    }
    test_constructor_redirected_factory_named_prefixed() {
        this.addLibrarySource('/foo.dart','import \'test.dart\';
        let library = this.checkLibrary('import \'foo.dart\' as foo;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;
        }else {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;
        }
    }
    test_constructor_redirected_factory_named_prefixed_generic() {
        this.addLibrarySource('/foo.dart','import \'test.dart\';
        let library = this.checkLibrary('import \'foo.dart\' as foo;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;
        }else {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;
        }
    }
    test_constructor_redirected_factory_named_unresolved_class() {
        let library = this.checkLibrary('class C<E> {
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<E> {
        }else {
            lib6.checkElementText(library,'class C<E> {
        }
    }
    test_constructor_redirected_factory_named_unresolved_constructor() {
        let library = this.checkLibrary('class D {}
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class D {
        }else {
            lib6.checkElementText(library,'class D {
        }
    }
    test_constructor_redirected_factory_unnamed() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_constructor_redirected_factory_unnamed_generic() {
        let library = this.checkLibrary('class C<T, U> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {
        }else {
            lib6.checkElementText(library,'class C<T, U> {
        }
    }
    test_constructor_redirected_factory_unnamed_imported() {
        this.addLibrarySource('/foo.dart','import \'test.dart\';
        let library = this.checkLibrary('import \'foo.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\';
        }else {
            lib6.checkElementText(library,'import \'foo.dart\';
        }
    }
    test_constructor_redirected_factory_unnamed_imported_generic() {
        this.addLibrarySource('/foo.dart','import \'test.dart\';
        let library = this.checkLibrary('import \'foo.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\';
        }else {
            lib6.checkElementText(library,'import \'foo.dart\';
        }
    }
    test_constructor_redirected_factory_unnamed_prefixed() {
        this.addLibrarySource('/foo.dart','import \'test.dart\';
        let library = this.checkLibrary('import \'foo.dart\' as foo;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;
        }else {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;
        }
    }
    test_constructor_redirected_factory_unnamed_prefixed_generic() {
        this.addLibrarySource('/foo.dart','import \'test.dart\';
        let library = this.checkLibrary('import \'foo.dart\' as foo;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;
        }else {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;
        }
    }
    test_constructor_redirected_factory_unnamed_unresolved() {
        let library = this.checkLibrary('class C<E> {
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<E> {
        }else {
            lib6.checkElementText(library,'class C<E> {
        }
    }
    test_constructor_redirected_thisInvocation_named() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_constructor_redirected_thisInvocation_named_generic() {
        let library = this.checkLibrary('class C<T> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> {
        }else {
            lib6.checkElementText(library,'class C<T> {
        }
    }
    test_constructor_redirected_thisInvocation_unnamed() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_constructor_redirected_thisInvocation_unnamed_generic() {
        let library = this.checkLibrary('class C<T> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> {
        }else {
            lib6.checkElementText(library,'class C<T> {
        }
    }
    test_constructor_withCycles_const() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_constructor_withCycles_nonConst() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_defaultValue_refersToGenericClass_constructor() {
        let library = this.checkLibrary('class B<T> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class B<T> {
        }else {
            lib6.checkElementText(library,'class B<T> {
        }
    }
    test_defaultValue_refersToGenericClass_constructor2() {
        let library = this.checkLibrary('abstract class A<T> {}
        if (this.isStrongMode) {
            lib6.checkElementText(library,'abstract class A<T> {
        }else {
            lib6.checkElementText(library,'abstract class A<T> {
        }
    }
    test_defaultValue_refersToGenericClass_functionG() {
        let library = this.checkLibrary('class B<T> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class B<T> {
        }else {
            lib6.checkElementText(library,'class B<T> {
        }
    }
    test_defaultValue_refersToGenericClass_methodG() {
        let library = this.checkLibrary('class B<T> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class B<T> {
        }else {
            lib6.checkElementText(library,'class B<T> {
        }
    }
    test_defaultValue_refersToGenericClass_methodG_classG() {
        let library = this.checkLibrary('class B<T1, T2> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class B<T1, T2> {
        }else {
            lib6.checkElementText(library,'class B<T1, T2> {
        }
    }
    test_defaultValue_refersToGenericClass_methodNG() {
        let library = this.checkLibrary('class B<T> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class B<T> {
        }else {
            lib6.checkElementText(library,'class B<T> {
        }
    }
    test_enum_documented() {
        let library = this.checkLibrary('// Extra comment so doc comment offset != 0
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/**
        }else {
            lib6.checkElementText(library,'/**
        }
    }
    test_enum_value_documented() {
        let library = this.checkLibrary('enum E {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'enum E {
        }else {
            lib6.checkElementText(library,'enum E {
        }
    }
    test_enum_values() {
        let library = this.checkLibrary('enum E { v1, v2 }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'enum E {
        }else {
            lib6.checkElementText(library,'enum E {
        }
    }
    test_enums() {
        let library = this.checkLibrary('enum E1 { v1 } enum E2 { v2 }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'enum E1 {
        }else {
            lib6.checkElementText(library,'enum E1 {
        }
    }
    test_error_extendsEnum() {
        let library = this.checkLibrary('enum E {a, b, c}
        if (this.isStrongMode) {
            lib6.checkElementText(library,'enum E {
        }else {
            lib6.checkElementText(library,'enum E {
        }
    }
    test_executable_parameter_type_typedef() {
        let library = this.checkLibrary('typedef F(int p);
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F(int p);
        }else {
            lib6.checkElementText(library,'typedef dynamic F(int p);
        }
    }
    test_export_class() {
        this.addLibrarySource('/a.dart','class C {}');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';
        }else {
            lib6.checkElementText(library,'export \'a.dart\';
        }
    }
    test_export_class_type_alias() {
        this.addLibrarySource('/a.dart','class C {} exends _D with _E; class _D {} class _E {}');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';
        }else {
            lib6.checkElementText(library,'export \'a.dart\';
        }
    }
    test_export_configurations_useDefault() {
        this.context.declaredVariables.define('dart.library.io','false');
        this.addLibrarySource('/foo.dart','class A {}');
        this.addLibrarySource('/foo_io.dart','class A {}');
        this.addLibrarySource('/foo_html.dart','class A {}');
        let library : any = this.checkLibrary('export \'foo.dart\'
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'foo.dart\';
        }else {
            lib6.checkElementText(library,'export \'foo.dart\';
        }
        expect(op(Op.INDEX,library.exports,0).uri,'foo.dart');
        expect(op(Op.INDEX,library.exports,0).exportedLibrary.source.shortName,'foo.dart');
    }
    test_export_configurations_useFirst() {
        this.context.declaredVariables.define('dart.library.io','true');
        this.context.declaredVariables.define('dart.library.html','true');
        this.addLibrarySource('/foo.dart','class A {}');
        this.addLibrarySource('/foo_io.dart','class A {}');
        this.addLibrarySource('/foo_html.dart','class A {}');
        let library : any = this.checkLibrary('export \'foo.dart\'
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'foo_io.dart\';
        }else {
            lib6.checkElementText(library,'export \'foo_io.dart\';
        }
        expect(op(Op.INDEX,library.exports,0).uri,'foo_io.dart');
        expect(op(Op.INDEX,library.exports,0).exportedLibrary.source.shortName,'foo_io.dart');
    }
    test_export_configurations_useSecond() {
        this.context.declaredVariables.define('dart.library.io','false');
        this.context.declaredVariables.define('dart.library.html','true');
        this.addLibrarySource('/foo.dart','class A {}');
        this.addLibrarySource('/foo_io.dart','class A {}');
        this.addLibrarySource('/foo_html.dart','class A {}');
        let library : any = this.checkLibrary('export \'foo.dart\'
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'foo_html.dart\';
        }else {
            lib6.checkElementText(library,'export \'foo_html.dart\';
        }
        let export : any = op(Op.INDEX,library.exports,0);
        expect(export.uri,'foo_html.dart');
        expect(export.exportedLibrary.source.shortName,'foo_html.dart');
    }
    test_export_function() {
        this.addLibrarySource('/a.dart','f() {}');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';
        }else {
            lib6.checkElementText(library,'export \'a.dart\';
        }
    }
    test_export_getter() {
        this.addLibrarySource('/a.dart','get f() => null;');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';
        }else {
            lib6.checkElementText(library,'export \'a.dart\';
        }
    }
    test_export_hide() {
        this.addLibrary('dart:async');
        let library = this.checkLibrary('export "dart:async" hide Stream, Future;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'dart:async\' hide Stream, Future;
        }else {
            lib6.checkElementText(library,'export \'dart:async\' hide Stream, Future;
        }
    }
    test_export_multiple_combinators() {
        this.addLibrary('dart:async');
        let library = this.checkLibrary('export "dart:async" hide Stream show Future;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'dart:async\' hide Stream show Future;
        }else {
            lib6.checkElementText(library,'export \'dart:async\' hide Stream show Future;
        }
    }
    test_export_setter() {
        this.addLibrarySource('/a.dart','void set f(value) {}');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';
        }else {
            lib6.checkElementText(library,'export \'a.dart\';
        }
    }
    test_export_show() {
        this.addLibrary('dart:async');
        let library = this.checkLibrary('export "dart:async" show Future, Stream;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'dart:async\' show Future, Stream;
        }else {
            lib6.checkElementText(library,'export \'dart:async\' show Future, Stream;
        }
    }
    test_export_typedef() {
        this.addLibrarySource('/a.dart','typedef F();');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';
        }else {
            lib6.checkElementText(library,'export \'a.dart\';
        }
    }
    test_export_variable() {
        this.addLibrarySource('/a.dart','var x;');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';
        }else {
            lib6.checkElementText(library,'export \'a.dart\';
        }
    }
    test_export_variable_const() {
        this.addLibrarySource('/a.dart','const x = 0;');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';
        }else {
            lib6.checkElementText(library,'export \'a.dart\';
        }
    }
    test_export_variable_final() {
        this.addLibrarySource('/a.dart','final x = 0;');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';
        }else {
            lib6.checkElementText(library,'export \'a.dart\';
        }
    }
    test_exportImport_configurations_useDefault() {
        this.context.declaredVariables.define('dart.library.io','false');
        this.addLibrarySource('/foo.dart','class A {}');
        this.addLibrarySource('/foo_io.dart','class A {}');
        this.addLibrarySource('/foo_html.dart','class A {}');
        this.addLibrarySource('/bar.dart','export \'foo.dart\'
        let library : any = this.checkLibrary('import \'bar.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'bar.dart\';
        }else {
            lib6.checkElementText(library,'import \'bar.dart\';
        }
        let typeA = library.definingCompilationUnit.getType('B').supertype;
        expect(typeA.element.source.shortName,'foo.dart');
    }
    test_exportImport_configurations_useFirst() {
        this.context.declaredVariables.define('dart.library.io','true');
        this.context.declaredVariables.define('dart.library.html','true');
        this.addLibrarySource('/foo.dart','class A {}');
        this.addLibrarySource('/foo_io.dart','class A {}');
        this.addLibrarySource('/foo_html.dart','class A {}');
        this.addLibrarySource('/bar.dart','export \'foo.dart\'
        let library = this.checkLibrary('import \'bar.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'bar.dart\';
        }else {
            lib6.checkElementText(library,'import \'bar.dart\';
        }
        let typeA = library.definingCompilationUnit.getType('B').supertype;
        expect(typeA.element.source.shortName,'foo_io.dart');
    }
    test_exports() {
        this.addLibrarySource('/a.dart','library a;');
        this.addLibrarySource('/b.dart','library b;');
        let library = this.checkLibrary('export "a.dart"; export "b.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';
        }else {
            lib6.checkElementText(library,'export \'a.dart\';
        }
    }
    test_expr_invalid_typeParameter_asPrefix() {
        this.variablesWithNotConstInitializers.add('f');
        let library = this.checkLibrary('class C<T> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> {
        }else {
            lib6.checkElementText(library,'class C<T> {
        }
    }
    test_field_covariant() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_field_documented() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_field_formal_param_inferred_type_implicit() {
        let library = this.checkLibrary('class C extends D { var v; C(this.v); }' + ' abstract class D { int get v; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends D {
        }else {
            lib6.checkElementText(library,'class C extends D {
        }
    }
    test_field_inferred_type_nonStatic_explicit_initialized() {
        let library = this.checkLibrary('class C { num v = 0; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_field_inferred_type_nonStatic_implicit_initialized() {
        let library = this.checkLibrary('class C { var v = 0; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_field_inferred_type_nonStatic_implicit_uninitialized() {
        let library = this.checkLibrary('class C extends D { var v; } abstract class D { int get v; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends D {
        }else {
            lib6.checkElementText(library,'class C extends D {
        }
    }
    test_field_inferred_type_static_implicit_initialized() {
        let library = this.checkLibrary('class C { static var v = 0; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_field_propagatedType_const_noDep() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_field_propagatedType_final_dep_inLib() {
        this.addLibrarySource('/a.dart','final a = 1;');
        let library = this.checkLibrary('import "a.dart";
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_field_propagatedType_final_dep_inPart() {
        this.addSource('/a.dart','part of lib; final a = 1;');
        let library = this.checkLibrary('library lib;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library lib;
        }else {
            lib6.checkElementText(library,'library lib;
        }
    }
    test_field_propagatedType_final_noDep_instance() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_field_propagatedType_final_noDep_static() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_field_static_final_untyped() {
        let library = this.checkLibrary('class C { static final x = 0; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_field_untyped() {
        let library = this.checkLibrary('class C { var x = 0; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_function_async() {
        let library = this.checkLibrary('import \'dart:async\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';
        }else {
            lib6.checkElementText(library,'import \'dart:async\';
        }
    }
    test_function_asyncStar() {
        let library = this.checkLibrary('import \'dart:async\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';
        }else {
            lib6.checkElementText(library,'import \'dart:async\';
        }
    }
    test_function_documented() {
        let library = this.checkLibrary('// Extra comment so doc comment offset != 0
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f() {}
        }else {
            lib6.checkElementText(library,'dynamic f() {}
        }
    }
    test_function_entry_point() {
        let library = this.checkLibrary('main() {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic main() {}
        }else {
            lib6.checkElementText(library,'dynamic main() {}
        }
    }
    test_function_entry_point_in_export() {
        this.addLibrarySource('/a.dart','library a; main() {}');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';
        }else {
            lib6.checkElementText(library,'export \'a.dart\';
        }
    }
    test_function_entry_point_in_export_hidden() {
        this.addLibrarySource('/a.dart','library a; main() {}');
        let library = this.checkLibrary('export "a.dart" hide main;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\' hide main;
        }else {
            lib6.checkElementText(library,'export \'a.dart\' hide main;
        }
    }
    test_function_entry_point_in_part() {
        this.addSource('/a.dart','part of my.lib; main() {}');
        let library = this.checkLibrary('library my.lib; part "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library my.lib;
        }else {
            lib6.checkElementText(library,'library my.lib;
        }
    }
    test_function_external() {
        let library = this.checkLibrary('external f();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'external dynamic f() {}
        }else {
            lib6.checkElementText(library,'external dynamic f() {}
        }
    }
    test_function_parameter_final() {
        let library = this.checkLibrary('f(final x) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f(final dynamic x) {}
        }else {
            lib6.checkElementText(library,'dynamic f(final dynamic x) {}
        }
    }
    test_function_parameter_kind_named() {
        let library = this.checkLibrary('f({x}) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f({dynamic x}) {}
        }else {
            lib6.checkElementText(library,'dynamic f({dynamic x}) {}
        }
    }
    test_function_parameter_kind_positional() {
        let library = this.checkLibrary('f([x]) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f([dynamic x]) {}
        }else {
            lib6.checkElementText(library,'dynamic f([dynamic x]) {}
        }
    }
    test_function_parameter_kind_required() {
        let library = this.checkLibrary('f(x) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f(dynamic x) {}
        }else {
            lib6.checkElementText(library,'dynamic f(dynamic x) {}
        }
    }
    test_function_parameter_parameters() {
        let library = this.checkLibrary('f(g(x, y)) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f((dynamic, dynamic) → dynamic g) {}
        }else {
            lib6.checkElementText(library,'dynamic f((dynamic, dynamic) → dynamic g) {}
        }
    }
    test_function_parameter_return_type() {
        let library = this.checkLibrary('f(int g()) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f(() → int g) {}
        }else {
            lib6.checkElementText(library,'dynamic f(() → int g) {}
        }
    }
    test_function_parameter_return_type_void() {
        let library = this.checkLibrary('f(void g()) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f(() → void g) {}
        }else {
            lib6.checkElementText(library,'dynamic f(() → void g) {}
        }
    }
    test_function_parameter_type() {
        let library = this.checkLibrary('f(int i) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f(int i) {}
        }else {
            lib6.checkElementText(library,'dynamic f(int i) {}
        }
    }
    test_function_parameters() {
        let library = this.checkLibrary('f(x, y) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f(dynamic x, dynamic y) {}
        }else {
            lib6.checkElementText(library,'dynamic f(dynamic x, dynamic y) {}
        }
    }
    test_function_return_type() {
        let library = this.checkLibrary('int f() => null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'int f() {}
        }else {
            lib6.checkElementText(library,'int f() {}
        }
    }
    test_function_return_type_implicit() {
        let library = this.checkLibrary('f() => null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f() {}
        }else {
            lib6.checkElementText(library,'dynamic f() {}
        }
    }
    test_function_return_type_void() {
        let library = this.checkLibrary('void f() {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void f() {}
        }else {
            lib6.checkElementText(library,'void f() {}
        }
    }
    test_function_type_parameter() {
        this.prepareAnalysisContext(this.createOptions());
        let library = this.checkLibrary('T f<T, U>(U u) => null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'T f<T, U>(U u) {}
        }else {
            lib6.checkElementText(library,'T f<T, U>(U u) {}
        }
    }
    test_function_type_parameter_with_function_typed_parameter() {
        this.prepareAnalysisContext(this.createOptions());
        let library = this.checkLibrary('void f<T, U>(T x(U u)) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void f<T, U>((U) → T x) {}
        }else {
            lib6.checkElementText(library,'void f<T, U>((U) → T x) {}
        }
    }
    test_functions() {
        let library = this.checkLibrary('f() {} g() {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f() {}
        }else {
            lib6.checkElementText(library,'dynamic f() {}
        }
    }
    test_futureOr() {
        let library = this.checkLibrary('import "dart:async"; FutureOr<int> x;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';
        }else {
            lib6.checkElementText(library,'import \'dart:async\';
        }
        let variables = library.definingCompilationUnit.topLevelVariables;
        expect(variables,hasLength(1));
        if (this.createOptions().strongMode) {
            expect(op(Op.INDEX,variables,0).type.toString(),'FutureOr<int>');
        }else {
            expect(op(Op.INDEX,variables,0).type.toString(),'dynamic');
        }
    }
    test_futureOr_const() {
        let library = this.checkLibrary('import "dart:async"; const x = FutureOr;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';
        }else {
            lib6.checkElementText(library,'import \'dart:async\';
        }
        let variables = library.definingCompilationUnit.topLevelVariables;
        expect(variables,hasLength(1));
        let x = op(Op.INDEX,variables,0) as any;
        if (this.createOptions().strongMode) {
            expect(x.type.toString(),'Type');
        }else {
            expect(x.type.toString(),'dynamic');
        }
        expect(x.constantInitializer.toString(),'FutureOr');
    }
    test_futureOr_inferred() {
        let library = this.checkLibrary('import "dart:async";
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';
        }else {
            lib6.checkElementText(library,'import \'dart:async\';
        }
        let variables = library.definingCompilationUnit.topLevelVariables;
        expect(variables,hasLength(2));
        let x = op(Op.INDEX,variables,0);
        expect(x.name,'x');
        let y = op(Op.INDEX,variables,1);
        expect(y.name,'y');
        if (this.createOptions().strongMode) {
            expect(x.type.toString(),'FutureOr<int>');
            expect(y.type.toString(),'dynamic');
        }else {
            expect(x.type.toString(),'dynamic');
            expect(y.type.toString(),'dynamic');
        }
    }
    test_generic_gClass_gMethodStatic() {
        this.prepareAnalysisContext(this.createOptions());
        let library = this.checkLibrary('class C<T, U> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {
        }else {
            lib6.checkElementText(library,'class C<T, U> {
        }
    }
    test_genericFunction_asFunctionReturnType() {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('int Function(int a, String b) f() => null;
        lib6.checkElementText(library,'(int, String) → int f() {}
    }
    test_genericFunction_asFunctionTypedParameterReturnType() {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('void f(int Function(int a, String b) p(num c)) => null;
        lib6.checkElementText(library,'void f((num) → (int, String) → int p) {}
    }
    test_genericFunction_asGenericFunctionReturnType() {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('typedef F = void Function(String a) Function(int b);
        lib6.checkElementText(library,'typedef F = (String) → void Function(int b);
    }
    test_genericFunction_asMethodReturnType() {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('class C {
        lib6.checkElementText(library,'class C {
    }
    test_genericFunction_asParameterType() {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('void f(int Function(int a, String b) p) => null;
        lib6.checkElementText(library,'void f((int, String) → int p) {}
    }
    test_genericFunction_asTopLevelVariableType() {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('int Function(int a, String b) v;
        lib6.checkElementText(library,'(int, String) → int v;
    }
    test_getElement_constructor_named() {
        let text : string = 'class C { C.named(); }';
        let source : any = this.addLibrarySource('/test.dart',text);
        let original : any = this.context.computeLibraryElement(source).getType('C').getNamedConstructor('named');
        expect(original,isNotNull);
        let resynthesized : any = this.validateGetElement(text,original);
        this.compareConstructorElements(resynthesized,original,'C.constructor named');
    }
    test_getElement_constructor_unnamed() {
        let text : string = 'class C { C(); }';
        let source : any = this.addLibrarySource('/test.dart',text);
        let original : any = this.context.computeLibraryElement(source).getType('C').unnamedConstructor;
        expect(original,isNotNull);
        let resynthesized : any = this.validateGetElement(text,original);
        this.compareConstructorElements(resynthesized,original,'C.constructor');
    }
    test_getElement_field() {
        let text : string = 'class C { var f; }';
        let source : any = this.addLibrarySource('/test.dart',text);
        let original : any = this.context.computeLibraryElement(source).getType('C').getField('f');
        expect(original,isNotNull);
        let resynthesized : any = this.validateGetElement(text,original);
        this.compareFieldElements(resynthesized,original,'C.field f');
    }
    test_getElement_getter() {
        let text : string = 'class C { get f => null; }';
        let source : any = this.addLibrarySource('/test.dart',text);
        let original : any = this.context.computeLibraryElement(source).getType('C').getGetter('f');
        expect(original,isNotNull);
        let resynthesized : any = this.validateGetElement(text,original);
        this.comparePropertyAccessorElements(resynthesized,original,'C.getter f');
    }
    test_getElement_method() {
        let text : string = 'class C { f() {} }';
        let source : any = this.addLibrarySource('/test.dart',text);
        let original : any = this.context.computeLibraryElement(source).getType('C').getMethod('f');
        expect(original,isNotNull);
        let resynthesized : any = this.validateGetElement(text,original);
        this.compareMethodElements(resynthesized,original,'C.method f');
    }
    test_getElement_operator() {
        let text : string = 'class C { operator+(x) => null; }';
        let source : any = this.addLibrarySource('/test.dart',text);
        let original : any = this.context.computeLibraryElement(source).getType('C').getMethod('+');
        expect(original,isNotNull);
        let resynthesized : any = this.validateGetElement(text,original);
        this.compareMethodElements(resynthesized,original,'C.operator+');
    }
    test_getElement_setter() {
        let text : string = 'class C { void set f(value) {} }';
        let source : any = this.addLibrarySource('/test.dart',text);
        let original : any = this.context.computeLibraryElement(source).getType('C').getSetter('f');
        expect(original,isNotNull);
        let resynthesized : any = this.validateGetElement(text,original);
        this.comparePropertyAccessorElements(resynthesized,original,'C.setter f');
    }
    test_getElement_unit() {
        let text : string = 'class C { f() {} }';
        let source : any = this.addLibrarySource('/test.dart',text);
        let original : any = this.context.computeLibraryElement(source).definingCompilationUnit;
        expect(original,isNotNull);
        let resynthesized : any = this.validateGetElement(text,original);
        this.compareCompilationUnitElements(resynthesized,original);
    }
    test_getter_documented() {
        let library = this.checkLibrary('// Extra comment so doc comment offset != 0
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/**
        }else {
            lib6.checkElementText(library,'/**
        }
    }
    test_getter_external() {
        let library = this.checkLibrary('external int get x;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'external int get x {}
        }else {
            lib6.checkElementText(library,'external int get x {}
        }
    }
    test_getter_inferred_type_nonStatic_implicit_return() {
        let library = this.checkLibrary('class C extends D { get f => null; } abstract class D { int get f; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends D {
        }else {
            lib6.checkElementText(library,'class C extends D {
        }
    }
    test_getters() {
        let library = this.checkLibrary('int get x => null; get y => null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'int get x {}
        }else {
            lib6.checkElementText(library,'int get x {}
        }
    }
    test_implicitTopLevelVariable_getterFirst() {
        let library = this.checkLibrary('int get x => 0; void set x(int value) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'int get x {}
        }else {
            lib6.checkElementText(library,'int get x {}
        }
    }
    test_implicitTopLevelVariable_setterFirst() {
        let library = this.checkLibrary('void set x(int value) {} int get x => 0;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void set x(int value) {}
        }else {
            lib6.checkElementText(library,'void set x(int value) {}
        }
    }
    test_import_configurations_useDefault() {
        this.context.declaredVariables.define('dart.library.io','false');
        this.addLibrarySource('/foo.dart','class A {}');
        this.addLibrarySource('/foo_io.dart','class A {}');
        this.addLibrarySource('/foo_html.dart','class A {}');
        let library = this.checkLibrary('import \'foo.dart\'
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\';
        }else {
            lib6.checkElementText(library,'import \'foo.dart\';
        }
        let typeA = library.definingCompilationUnit.getType('B').supertype;
        expect(typeA.element.source.shortName,'foo.dart');
    }
    test_import_configurations_useFirst() {
        this.context.declaredVariables.define('dart.library.io','true');
        this.context.declaredVariables.define('dart.library.html','true');
        this.addLibrarySource('/foo.dart','class A {}');
        this.addLibrarySource('/foo_io.dart','class A {}');
        this.addLibrarySource('/foo_html.dart','class A {}');
        let library = this.checkLibrary('import \'foo.dart\'
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo_io.dart\';
        }else {
            lib6.checkElementText(library,'import \'foo_io.dart\';
        }
        let typeA = library.definingCompilationUnit.getType('B').supertype;
        expect(typeA.element.source.shortName,'foo_io.dart');
    }
    test_import_deferred() {
        this.addLibrarySource('/a.dart','f() {}');
        let library = this.checkLibrary('import "a.dart" deferred as p; main() { p.f(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' deferred as p;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' deferred as p;
        }
    }
    test_import_hide() {
        this.addLibrary('dart:async');
        let library = this.checkLibrary('import "dart:async" hide Stream, Completer; Future f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\' hide Stream, Completer;
        }else {
            lib6.checkElementText(library,'import \'dart:async\' hide Stream, Completer;
        }
    }
    test_import_invalidUri_metadata() {
        this.allowMissingFiles = true;
        this.shouldCompareLibraryElements = false;
        let resynthesized : any = this.checkLibrary('@foo
        if (this.isStrongMode) {
            lib6.checkElementText(resynthesized,'@
        }else {
            lib6.checkElementText(resynthesized,'@
        }
    }
    test_import_multiple_combinators() {
        this.addLibrary('dart:async');
        let library = this.checkLibrary('import "dart:async" hide Stream show Future; Future f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\' hide Stream show Future;
        }else {
            lib6.checkElementText(library,'import \'dart:async\' hide Stream show Future;
        }
    }
    test_import_prefixed() {
        this.addLibrarySource('/a.dart','library a; class C {}');
        let library = this.checkLibrary('import "a.dart" as a; a.C c;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as a;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as a;
        }
    }
    test_import_self() {
        let resynthesized : any = this.checkLibrary('import \'test.dart\' as p;
        expect(resynthesized.imports,hasLength(2));
        expect(op(Op.INDEX,resynthesized.imports,0).importedLibrary.location,resynthesized.location);
        expect(op(Op.INDEX,resynthesized.imports,1).importedLibrary.isDartCore,true);
        if (this.isStrongMode) {
            lib6.checkElementText(resynthesized,'import \'test.dart\' as p;
        }else {
            lib6.checkElementText(resynthesized,'import \'test.dart\' as p;
        }
    }
    test_import_short_absolute() {
        this.testFile = '/my/project/bin/test.dart';
        let destinationPath = this.resourceProvider.pathContext.fromUri(lib7.Uri.parse('/a.dart'));
        this.addLibrarySource(destinationPath,'class C {}');
        let library = this.checkLibrary('import "/a.dart"; C c;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'/a.dart\';
        }else {
            lib6.checkElementText(library,'import \'/a.dart\';
        }
    }
    test_import_show() {
        this.addLibrary('dart:async');
        let library = this.checkLibrary('import "dart:async" show Future, Stream;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\' show Future, Stream;
        }else {
            lib6.checkElementText(library,'import \'dart:async\' show Future, Stream;
        }
    }
    test_imports() {
        this.addLibrarySource('/a.dart','library a; class C {}');
        this.addLibrarySource('/b.dart','library b; class D {}');
        let library = this.checkLibrary('import "a.dart"; import "b.dart"; C c; D d;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_inferred_function_type_for_variable_in_generic_function() {
        let library = this.checkLibrary('f<U, V>() {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f<U, V>() {}
        }else {
            lib6.checkElementText(library,'dynamic f<U, V>() {}
        }
    }
    test_inferred_function_type_in_generic_class_constructor() {
        let library = this.checkLibrary('class C<U, V> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<U, V> {
        }else {
            lib6.checkElementText(library,'class C<U, V> {
        }
    }
    test_inferred_function_type_in_generic_class_getter() {
        let library = this.checkLibrary('class C<U, V> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<U, V> {
        }else {
            lib6.checkElementText(library,'class C<U, V> {
        }
    }
    test_inferred_function_type_in_generic_class_in_generic_method() {
        let library = this.checkLibrary('class C<T> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> {
        }else {
            lib6.checkElementText(library,'class C<T> {
        }
    }
    test_inferred_function_type_in_generic_class_setter() {
        let library = this.checkLibrary('class C<U, V> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<U, V> {
        }else {
            lib6.checkElementText(library,'class C<U, V> {
        }
    }
    test_inferred_function_type_in_generic_closure() {
        if (!this.createOptions().strongMode) {
            return;
        }
        let library = this.checkLibrary('f<T>() {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f<T>() {}
        }else {
            lib6.checkElementText(library,'');
        }
    }
    test_inferred_generic_function_type_in_generic_closure() {
        if (!this.createOptions().strongMode) {
            return;
        }
        let library = this.checkLibrary('f<T>() {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f<T>() {}
        }else {
            lib6.checkElementText(library,'');
        }
    }
    test_inferred_type_is_typedef() {
        let library = this.checkLibrary('typedef int F(String s);' + ' class C extends D { var v; }' + ' abstract class D { F get v; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef int F(String s);
        }else {
            lib6.checkElementText(library,'typedef int F(String s);
        }
    }
    test_inferred_type_refers_to_bound_type_param() {
        let library = this.checkLibrary('class C<T> extends D<int, T> { var v; }' + ' abstract class D<U, V> { Map<V, U> get v; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> extends D<int, T> {
        }else {
            lib6.checkElementText(library,'class C<T> extends D<int, T> {
        }
    }
    test_inferred_type_refers_to_function_typed_param_of_typedef() : void {
        let library = this.checkLibrary('typedef void F(int g(String s));
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef void F((String) → int g);
        }else {
            lib6.checkElementText(library,'typedef void F((String) → int g);
        }
    }
    test_inferred_type_refers_to_function_typed_parameter_type_generic_class() {
        let library = this.checkLibrary('class C<T, U> extends D<U, int> { void f(int x, g) {} }' + ' abstract class D<V, W> { void f(int x, W g(V s)); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> extends D<U, int> {
        }else {
            lib6.checkElementText(library,'class C<T, U> extends D<U, int> {
        }
    }
    test_inferred_type_refers_to_function_typed_parameter_type_other_lib() {
        this.addLibrarySource('/a.dart','import "b.dart"; abstract class D extends E {}');
        this.addLibrarySource('/b.dart','abstract class E { void f(int x, int g(String s)); }');
        let library = this.checkLibrary('import "a.dart"; class C extends D { void f(int x, g) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_inferred_type_refers_to_method_function_typed_parameter_type() {
        let library = this.checkLibrary('class C extends D { void f(int x, g) {} }' + ' abstract class D { void f(int x, int g(String s)); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends D {
        }else {
            lib6.checkElementText(library,'class C extends D {
        }
    }
    test_inferred_type_refers_to_nested_function_typed_param() {
        let library = this.checkLibrary('f(void g(int x, void h())) => null;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic v;
        }else {
            lib6.checkElementText(library,'dynamic v;
        }
    }
    test_inferred_type_refers_to_nested_function_typed_param_named() {
        let library = this.checkLibrary('f({void g(int x, void h())}) => null;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic v;
        }else {
            lib6.checkElementText(library,'dynamic v;
        }
    }
    test_inferred_type_refers_to_setter_function_typed_parameter_type() {
        let library = this.checkLibrary('class C extends D { void set f(g) {} }' + ' abstract class D { void set f(int g(String s)); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends D {
        }else {
            lib6.checkElementText(library,'class C extends D {
        }
    }
    test_inferredType_definedInSdkLibraryPart() : void {
        this.addSource('/a.dart','import \'dart:async\';
        let library : any = this.checkLibrary('import \'a.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
        let b : any = op(Op.INDEX,library.definingCompilationUnit.types,0);
        let p : any = op(Op.INDEX,op(Op.INDEX,b.methods,0).parameters,0);
        let streamElement : any = p.type.element;
        if (is(streamElement, any)) {
            expect(streamElement.source,isNot(streamElement.library.source));
        }
    }
    test_inferredType_usesSyntheticFunctionType_functionTypedParam() : void {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('int f(int x(String y)) => null;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'List<((String) → int) → Object> v;
        }else {
            lib6.checkElementText(library,'dynamic v;
        }
    }
    test_inheritance_errors() {
        let library = this.checkLibrary('abstract class A {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'abstract class A {
        }else {
            lib6.checkElementText(library,'abstract class A {
        }
    }
    test_initializer_executable_with_return_type_from_closure() {
        let library = this.checkLibrary('var v = () => 0;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'() → int v;
        }else {
            lib6.checkElementText(library,'dynamic v;
        }
    }
    test_initializer_executable_with_return_type_from_closure_await_dynamic() {
        let library = this.checkLibrary('var v = (f) async => await f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'(dynamic) → Future<dynamic> v;
        }else {
            lib6.checkElementText(library,'dynamic v;
        }
    }
    test_initializer_executable_with_return_type_from_closure_await_future3_int() {
        let library = this.checkLibrary('import \'dart:async\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';
        }else {
            lib6.checkElementText(library,'import \'dart:async\';
        }
    }
    test_initializer_executable_with_return_type_from_closure_await_future_int() {
        let library = this.checkLibrary('import \'dart:async\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';
        }else {
            lib6.checkElementText(library,'import \'dart:async\';
        }
    }
    test_initializer_executable_with_return_type_from_closure_await_future_noArg() {
        let library = this.checkLibrary('import \'dart:async\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';
        }else {
            lib6.checkElementText(library,'import \'dart:async\';
        }
    }
    test_initializer_executable_with_return_type_from_closure_field() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_initializer_executable_with_return_type_from_closure_local() {
        let library = this.checkLibrary('void f() {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void f() {}
        }else {
            lib6.checkElementText(library,'void f() {}
        }
    }
    test_instantiateToBounds_boundRefersToEarlierTypeArgument() {
        let library = this.checkLibrary('class C<S extends num, T extends C<S, T>> {}
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<S extends num, T extends C<S, T>> {
        }else {
            lib6.checkElementText(library,'class C<S extends num, T extends C<S, T>> {
        }
    }
    test_instantiateToBounds_boundRefersToItself() {
        let library = this.checkLibrary('class C<T extends C<T>> {}
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T extends C<T>> {
        }else {
            lib6.checkElementText(library,'class C<T extends C<T>> {
        }
    }
    test_instantiateToBounds_boundRefersToLaterTypeArgument() {
        let library = this.checkLibrary('class C<T extends C<T, U>, U extends num> {}
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T extends C<T, U>, U extends num> {
        }else {
            lib6.checkElementText(library,'class C<T extends C<T, U>, U extends num> {
        }
    }
    test_instantiateToBounds_functionTypeAlias_simple() {
        let library = this.checkLibrary('typedef F<T extends num>(T p);
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F<T extends num>(T p);
        }else {
            lib6.checkElementText(library,'typedef dynamic F<T extends num>(T p);
        }
    }
    test_instantiateToBounds_simple() {
        let library = this.checkLibrary('class C<T extends num> {}
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T extends num> {
        }else {
            lib6.checkElementText(library,'class C<T extends num> {
        }
    }
    test_invalid_annotation_prefixed_constructor() {
        this.addLibrarySource('/a.dart','class C {
        let library = this.checkLibrary('import "a.dart" as a;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as a;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as a;
        }
    }
    test_invalid_annotation_unprefixed_constructor() {
        this.addLibrarySource('/a.dart','class C {
        let library = this.checkLibrary('import "a.dart";
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_invalid_importPrefix_asTypeArgument() {
        let library = this.checkLibrary('import \'dart:async\' as ppp;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\' as ppp;
        }else {
            lib6.checkElementText(library,'import \'dart:async\' as ppp;
        }
    }
    test_invalid_nameConflict_imported() {
        this.namesThatCannotBeResolved.add('V');
        this.addLibrarySource('/a.dart','V() {}');
        this.addLibrarySource('/b.dart','V() {}');
        let library = this.checkLibrary('import \'a.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_invalid_nameConflict_imported_exported() {
        this.namesThatCannotBeResolved.add('V');
        this.addLibrarySource('/a.dart','V() {}');
        this.addLibrarySource('/b.dart','V() {}');
        this.addLibrarySource('/c.dart','export \'a.dart\';
        let library = this.checkLibrary('import \'c.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'c.dart\';
        }else {
            lib6.checkElementText(library,'import \'c.dart\';
        }
    }
    test_invalid_nameConflict_local() {
        this.namesThatCannotBeResolved.add('V');
        let library = this.checkLibrary('foo([p = V]) {}
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic V;
        }else {
            lib6.checkElementText(library,'dynamic V;
        }
    }
    test_invalid_setterParameter_fieldFormalParameter() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_invalid_setterParameter_fieldFormalParameter_self() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_invalidUri_part_emptyUri() {
        this.allowMissingFiles = true;
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('part \'\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'part \'\';
        }else {
            lib6.checkElementText(library,'part \'\';
        }
    }
    test_invalidUris() {
        this.allowMissingFiles = true;
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('import \'[invalid uri]\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'[invalid uri]\';
        }else {
            lib6.checkElementText(library,'import \'[invalid uri]\';
        }
    }
    test_library() {
        let library = this.checkLibrary('');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'');
        }else {
            lib6.checkElementText(library,'');
        }
    }
    test_library_documented() {
        let library = this.checkLibrary('// Extra comment so doc comment offset != 0
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library foo;
        }else {
            lib6.checkElementText(library,'library foo;
        }
    }
    test_library_name_with_spaces() {
        let library = this.checkLibrary('library foo . bar ;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library foo.bar;
        }else {
            lib6.checkElementText(library,'library foo.bar;
        }
    }
    test_library_named() {
        let library = this.checkLibrary('library foo.bar;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library foo.bar;
        }else {
            lib6.checkElementText(library,'library foo.bar;
        }
    }
    test_localFunctions() {
        let library = this.checkLibrary('f() {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f() {}
        }else {
            lib6.checkElementText(library,'dynamic f() {}
        }
    }
    test_localFunctions_inConstructor() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_localFunctions_inMethod() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_localFunctions_inTopLevelGetter() {
        let library = this.checkLibrary('get g {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic get g {}
        }else {
            lib6.checkElementText(library,'dynamic get g {}
        }
    }
    test_localLabels_inConstructor() {
        let library = this.checkLibrary('class C {
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_localLabels_inMethod() {
        let library = this.checkLibrary('class C {
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_localLabels_inTopLevelFunction() {
        let library = this.checkLibrary('main() {
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic main() {}
        }else {
            lib6.checkElementText(library,'dynamic main() {}
        }
    }
    test_localVariables_inConstructor() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_localVariables_inLocalFunction() {
        let library = this.checkLibrary('f() {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f() {}
        }else {
            lib6.checkElementText(library,'dynamic f() {}
        }
    }
    test_localVariables_inMethod() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_localVariables_inTopLevelFunction() {
        let library = this.checkLibrary('main() {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic main() {}
        }else {
            lib6.checkElementText(library,'dynamic main() {}
        }
    }
    test_localVariables_inTopLevelGetter() {
        let library = this.checkLibrary('get g {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic get g {}
        }else {
            lib6.checkElementText(library,'dynamic get g {}
        }
    }
    test_main_class() {
        let library = this.checkLibrary('class main {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class main {
        }else {
            lib6.checkElementText(library,'class main {
        }
    }
    test_main_class_alias() {
        let library = this.checkLibrary('class main = C with D; class C {} class D {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class alias main extends C with D {
        }else {
            lib6.checkElementText(library,'class alias main extends C with D {
        }
    }
    test_main_class_alias_via_export() {
        this.addLibrarySource('/a.dart','class main = C with D; class C {} class D {}');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';
        }else {
            lib6.checkElementText(library,'export \'a.dart\';
        }
    }
    test_main_class_via_export() {
        this.addLibrarySource('/a.dart','class main {}');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';
        }else {
            lib6.checkElementText(library,'export \'a.dart\';
        }
    }
    test_main_getter() {
        let library = this.checkLibrary('get main => null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic get main {}
        }else {
            lib6.checkElementText(library,'dynamic get main {}
        }
    }
    test_main_getter_via_export() {
        this.addLibrarySource('/a.dart','get main => null;');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';
        }else {
            lib6.checkElementText(library,'export \'a.dart\';
        }
    }
    test_main_typedef() {
        let library = this.checkLibrary('typedef main();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic main();
        }else {
            lib6.checkElementText(library,'typedef dynamic main();
        }
    }
    test_main_typedef_via_export() {
        this.addLibrarySource('/a.dart','typedef main();');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';
        }else {
            lib6.checkElementText(library,'export \'a.dart\';
        }
    }
    test_main_variable() {
        let library = this.checkLibrary('var main;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic main;
        }else {
            lib6.checkElementText(library,'dynamic main;
        }
    }
    test_main_variable_via_export() {
        this.addLibrarySource('/a.dart','var main;');
        let library = this.checkLibrary('export "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'a.dart\';
        }else {
            lib6.checkElementText(library,'export \'a.dart\';
        }
    }
    test_member_function_async() {
        let library = this.checkLibrary('import \'dart:async\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';
        }else {
            lib6.checkElementText(library,'import \'dart:async\';
        }
    }
    test_member_function_asyncStar() {
        let library = this.checkLibrary('import \'dart:async\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\';
        }else {
            lib6.checkElementText(library,'import \'dart:async\';
        }
    }
    test_metadata_classDeclaration() {
        let library = this.checkLibrary('const a = null;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@
        }else {
            lib6.checkElementText(library,'@
        }
    }
    test_metadata_classTypeAlias() {
        let library = this.checkLibrary('const a = null; @a class C = D with E; class D {} class E {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@
        }else {
            lib6.checkElementText(library,'@
        }
    }
    test_metadata_constructor_call_named() {
        let library = this.checkLibrary('class A { const A.named(); } @A.named() class C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class A {
        }else {
            lib6.checkElementText(library,'class A {
        }
    }
    test_metadata_constructor_call_named_prefixed() {
        this.addLibrarySource('/foo.dart','class A { const A.named(); }');
        let library = this.checkLibrary('import "foo.dart" as foo; @foo.A.named() class C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;
        }else {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;
        }
    }
    test_metadata_constructor_call_unnamed() {
        let library = this.checkLibrary('class A { const A(); } @A() class C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class A {
        }else {
            lib6.checkElementText(library,'class A {
        }
    }
    test_metadata_constructor_call_unnamed_prefixed() {
        this.addLibrarySource('/foo.dart','class A { const A(); }');
        let library = this.checkLibrary('import "foo.dart" as foo; @foo.A() class C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;
        }else {
            lib6.checkElementText(library,'import \'foo.dart\' as foo;
        }
    }
    test_metadata_constructor_call_with_args() {
        let library = this.checkLibrary('class A { const A(x); } @A(null) class C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class A {
        }else {
            lib6.checkElementText(library,'class A {
        }
    }
    test_metadata_constructorDeclaration_named() {
        let library = this.checkLibrary('const a = null; class C { @a C.named(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_metadata_constructorDeclaration_unnamed() {
        let library = this.checkLibrary('const a = null; class C { @a C(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_metadata_enumDeclaration() {
        let library = this.checkLibrary('const a = null; @a enum E { v }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@
        }else {
            lib6.checkElementText(library,'@
        }
    }
    test_metadata_exportDirective() {
        this.addLibrarySource('/foo.dart','');
        let library = this.checkLibrary('@a export "foo.dart"; const a = null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@
        }else {
            lib6.checkElementText(library,'@
        }
    }
    test_metadata_fieldDeclaration() {
        let library = this.checkLibrary('const a = null; class C { @a int x; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_metadata_fieldFormalParameter() {
        let library = this.checkLibrary('const a = null; class C { var x; C(@a this.x); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_metadata_fieldFormalParameter_withDefault() {
        let library = this.checkLibrary('const a = null; class C { var x; C([@a this.x = null]); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_metadata_functionDeclaration_function() {
        let library = this.checkLibrary('const a = null; @a f() {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic a = null;
        }else {
            lib6.checkElementText(library,'const dynamic a = null;
        }
    }
    test_metadata_functionDeclaration_getter() {
        let library = this.checkLibrary('const a = null; @a get f => null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic a = null;
        }else {
            lib6.checkElementText(library,'const dynamic a = null;
        }
    }
    test_metadata_functionDeclaration_setter() {
        let library = this.checkLibrary('const a = null; @a set f(value) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic a = null;
        }else {
            lib6.checkElementText(library,'const dynamic a = null;
        }
    }
    test_metadata_functionTypeAlias() {
        let library = this.checkLibrary('const a = null; @a typedef F();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@
        }else {
            lib6.checkElementText(library,'@
        }
    }
    test_metadata_functionTypedFormalParameter() {
        let library = this.checkLibrary('const a = null; f(@a g()) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic a = null;
        }else {
            lib6.checkElementText(library,'const dynamic a = null;
        }
    }
    test_metadata_functionTypedFormalParameter_withDefault() {
        let library = this.checkLibrary('const a = null; f([@a g() = null]) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic a = null;
        }else {
            lib6.checkElementText(library,'const dynamic a = null;
        }
    }
    test_metadata_importDirective() {
        this.addLibrarySource('/foo.dart','const b = null;');
        let library = this.checkLibrary('@a import "foo.dart"; const a = b;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@
        }else {
            lib6.checkElementText(library,'@
        }
    }
    test_metadata_invalid_classDeclaration() {
        let library = this.checkLibrary('f(_) {} @f(42) class C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@
        }else {
            lib6.checkElementText(library,'@
        }
    }
    test_metadata_libraryDirective() {
        let library = this.checkLibrary('@a library L; const a = null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@
        }else {
            lib6.checkElementText(library,'@
        }
    }
    test_metadata_methodDeclaration_getter() {
        let library = this.checkLibrary('const a = null; class C { @a get m => null; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_metadata_methodDeclaration_method() {
        let library = this.checkLibrary('const a = null;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_metadata_methodDeclaration_setter() {
        let library = this.checkLibrary('const a = null; class C { @a set m(value) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_metadata_partDirective() {
        this.addSource('/foo.dart','part of L;');
        let library = this.checkLibrary('library L; @a part "foo.dart"; const a = null;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library L;
        }else {
            lib6.checkElementText(library,'library L;
        }
    }
    test_metadata_prefixed_variable() {
        this.addLibrarySource('/a.dart','const b = null;');
        let library = this.checkLibrary('import "a.dart" as a; @a.b class C {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\' as a;
        }else {
            lib6.checkElementText(library,'import \'a.dart\' as a;
        }
    }
    test_metadata_simpleFormalParameter() {
        let library = this.checkLibrary('const a = null; f(@a x) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic a = null;
        }else {
            lib6.checkElementText(library,'const dynamic a = null;
        }
    }
    test_metadata_simpleFormalParameter_withDefault() {
        let library = this.checkLibrary('const a = null; f([@a x = null]) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic a = null;
        }else {
            lib6.checkElementText(library,'const dynamic a = null;
        }
    }
    test_metadata_topLevelVariableDeclaration() {
        let library = this.checkLibrary('const a = null; @a int v;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic a = null;
        }else {
            lib6.checkElementText(library,'const dynamic a = null;
        }
    }
    test_metadata_typeParameter_ofClass() {
        let library = this.checkLibrary('const a = null; class C<@a T> {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> {
        }else {
            lib6.checkElementText(library,'class C<T> {
        }
    }
    test_metadata_typeParameter_ofClassTypeAlias() {
        let library = this.checkLibrary('const a = null; class C<@a T> = D with E; class D {} class E {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class alias C<T> extends D with E {
        }else {
            lib6.checkElementText(library,'class alias C<T> extends D with E {
        }
    }
    test_metadata_typeParameter_ofFunction() {
        let library = this.checkLibrary('const a = null; f<@a T>() {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const dynamic a = null;
        }else {
            lib6.checkElementText(library,'const dynamic a = null;
        }
    }
    test_metadata_typeParameter_ofTypedef() {
        let library = this.checkLibrary('const a = null; typedef F<@a T>();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F<T>();
        }else {
            lib6.checkElementText(library,'typedef dynamic F<T>();
        }
    }
    test_method_documented() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_method_inferred_type_nonStatic_implicit_param() {
        let library = this.checkLibrary('class C extends D { void f(value) {} }' + ' abstract class D { void f(int value); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends D {
        }else {
            lib6.checkElementText(library,'class C extends D {
        }
    }
    test_method_inferred_type_nonStatic_implicit_return() {
        let library = this.checkLibrary('class C extends D { f() => null; } abstract class D { int f(); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends D {
        }else {
            lib6.checkElementText(library,'class C extends D {
        }
    }
    test_method_type_parameter() {
        this.prepareAnalysisContext(this.createOptions());
        let library = this.checkLibrary('class C { T f<T, U>(U u) => null; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_method_type_parameter_in_generic_class() {
        this.prepareAnalysisContext(this.createOptions());
        let library = this.checkLibrary('class C<T, U> { V f<V, W>(T t, U u, W w) => null; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {
        }else {
            lib6.checkElementText(library,'class C<T, U> {
        }
    }
    test_method_type_parameter_with_function_typed_parameter() {
        this.prepareAnalysisContext(this.createOptions());
        let library = this.checkLibrary('class C { void f<T, U>(T x(U u)) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_nameConflict_exportedAndLocal() {
        this.namesThatCannotBeResolved.add('V');
        this.addLibrarySource('/a.dart','class C {}');
        this.addLibrarySource('/c.dart','export \'a.dart\';
        let library = this.checkLibrary('import \'c.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'c.dart\';
        }else {
            lib6.checkElementText(library,'import \'c.dart\';
        }
    }
    test_nameConflict_exportedAndLocal_exported() {
        this.namesThatCannotBeResolved.add('V');
        this.addLibrarySource('/a.dart','class C {}');
        this.addLibrarySource('/c.dart','export \'a.dart\';
        this.addLibrarySource('/d.dart','export "c.dart";');
        let library = this.checkLibrary('import \'d.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'d.dart\';
        }else {
            lib6.checkElementText(library,'import \'d.dart\';
        }
    }
    test_nameConflict_exportedAndParted() {
        this.namesThatCannotBeResolved.add('V');
        this.addLibrarySource('/a.dart','class C {}');
        this.addLibrarySource('/b.dart','part of lib;
        this.addLibrarySource('/c.dart','library lib;
        let library = this.checkLibrary('import \'c.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'c.dart\';
        }else {
            lib6.checkElementText(library,'import \'c.dart\';
        }
    }
    test_nameConflict_importWithRelativeUri_exportWithAbsolute() {
        if (this.resourceProvider.pathContext.separator != '/') {
            return;
        }
        this.addLibrarySource('/a.dart','class A {}');
        this.addLibrarySource('/b.dart','export "/a.dart";');
        let library = this.checkLibrary('import \'a.dart\';
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_nested_generic_functions_in_generic_class_with_function_typed_params() {
        let library = this.checkLibrary('class C<T, U> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {
        }else {
            lib6.checkElementText(library,'class C<T, U> {
        }
    }
    test_nested_generic_functions_in_generic_class_with_local_variables() {
        let library = this.checkLibrary('class C<T, U> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {
        }else {
            lib6.checkElementText(library,'class C<T, U> {
        }
    }
    test_nested_generic_functions_with_function_typed_param() {
        let library = this.checkLibrary('void f<T, U>() {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void f<T, U>() {}
        }else {
            lib6.checkElementText(library,'void f<T, U>() {}
        }
    }
    test_nested_generic_functions_with_local_variables() {
        let library = this.checkLibrary('void f<T, U>() {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void f<T, U>() {}
        }else {
            lib6.checkElementText(library,'void f<T, U>() {}
        }
    }
    test_operator() {
        let library = this.checkLibrary('class C { C operator+(C other) => null; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_operator_equal() {
        let library = this.checkLibrary('class C { bool operator==(Object other) => false; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_operator_external() {
        let library = this.checkLibrary('class C { external C operator+(C other); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_operator_greater_equal() {
        let library = this.checkLibrary('class C { bool operator>=(C other) => false; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_operator_index() {
        let library = this.checkLibrary('class C { bool operator[](int i) => null; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_operator_index_set() {
        let library = this.checkLibrary('class C { void operator[]=(int i, bool v) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_operator_less_equal() {
        let library = this.checkLibrary('class C { bool operator<=(C other) => false; }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_parameter_checked() : void {
        let library = this.checkLibrary('library meta;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library meta;
        }else {
            lib6.checkElementText(library,'library meta;
        }
    }
    test_parameter_checked_inherited() : void {
        let library = this.checkLibrary('library meta;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library meta;
        }else {
            lib6.checkElementText(library,'library meta;
        }
    }
    test_parameter_covariant() {
        this.prepareAnalysisContext(this.createOptions());
        let library = this.checkLibrary('class C { void m(covariant C c) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_parameter_covariant_inherited() : void {
        let library = this.checkLibrary('class A<T> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class A<T> {
        }else {
            lib6.checkElementText(library,'class A<T> {
        }
    }
    test_parameter_parameters() {
        let library = this.checkLibrary('class C { f(g(x, y)) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_parameter_parameters_in_generic_class() {
        let library = this.checkLibrary('class C<A, B> { f(A g(B x)) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<A, B> {
        }else {
            lib6.checkElementText(library,'class C<A, B> {
        }
    }
    test_parameter_return_type() {
        let library = this.checkLibrary('class C { f(int g()) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_parameter_return_type_void() {
        let library = this.checkLibrary('class C { f(void g()) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_parameterTypeNotInferred_constructor() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_parameterTypeNotInferred_initializingFormal() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_parameterTypeNotInferred_staticMethod() {
        let library = this.checkLibrary('class C {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_parameterTypeNotInferred_topLevelFunction() {
        let library = this.checkLibrary('void positional([x = 1]) {}
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void positional([dynamic x = 1]) {}
        }else {
            lib6.checkElementText(library,'void positional([dynamic x = 1]) {}
        }
    }
    test_parts() {
        this.addSource('/a.dart','part of my.lib;');
        this.addSource('/b.dart','part of my.lib;');
        let library = this.checkLibrary('library my.lib; part "a.dart"; part "b.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library my.lib;
        }else {
            lib6.checkElementText(library,'library my.lib;
        }
    }
    test_parts_invalidUri() {
        this.allowMissingFiles = true;
        this.shouldCompareLibraryElements = false;
        this.addSource('/foo/bar.dart','part of my.lib;');
        let library = this.checkLibrary('library my.lib; part "foo/";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library my.lib;
        }else {
            lib6.checkElementText(library,'library my.lib;
        }
    }
    test_parts_invalidUri_nullStringValue() {
        this.allowMissingFiles = true;
        this.shouldCompareLibraryElements = false;
        this.addSource('/foo/bar.dart','part of my.lib;');
        let library = this.checkLibrary('library my.lib;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library my.lib;
        }else {
            lib6.checkElementText(library,'library my.lib;
        }
    }
    test_propagated_type_refers_to_closure() {
        let library = this.checkLibrary('void f() {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void f() {}
        }else {
            lib6.checkElementText(library,'void f() {}
        }
    }
    test_setter_covariant() {
        let library = this.checkLibrary('class C { void set x(covariant int value); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_setter_documented() {
        let library = this.checkLibrary('// Extra comment so doc comment offset != 0
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/**
        }else {
            lib6.checkElementText(library,'/**
        }
    }
    test_setter_external() {
        let library = this.checkLibrary('external void set x(int value);');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'external void set x(int value) {}
        }else {
            lib6.checkElementText(library,'external void set x(int value) {}
        }
    }
    test_setter_inferred_type_nonStatic_implicit_param() {
        let library = this.checkLibrary('class C extends D { void set f(value) {} }' + ' abstract class D { void set f(int value); }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C extends D {
        }else {
            lib6.checkElementText(library,'class C extends D {
        }
    }
    test_setter_inferred_type_static_implicit_return() {
        let library = this.checkLibrary('class C { static set f(int value) {} }');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_setter_inferred_type_top_level_implicit_return() {
        let library = this.checkLibrary('set f(int value) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void set f(int value) {}
        }else {
            lib6.checkElementText(library,'dynamic set f(int value) {}
        }
    }
    test_setters() {
        let library = this.checkLibrary('void set x(int value) {} set y(value) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void set x(int value) {}
        }else {
            lib6.checkElementText(library,'void set x(int value) {}
        }
    }
    test_syntheticFunctionType_genericClosure() {
        if (!this.createOptions().strongMode) {
            return;
        }
        let library = this.checkLibrary('final v = f() ? /*<T>*/(T t) => 0 : /*<T>*/(T t) => 1;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'');
        }else {
            lib6.checkElementText(library,'');
        }
    }
    test_syntheticFunctionType_genericClosure_inGenericFunction() {
        if (!this.createOptions().strongMode) {
            return;
        }
        let library = this.checkLibrary('void f<T, U>(bool b) {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void f<T, U>(bool b) {}
        }else {
            lib6.checkElementText(library,'');
        }
    }
    test_syntheticFunctionType_inGenericClass() {
        let library = this.checkLibrary('class C<T, U> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C<T, U> {
        }
    }
    test_syntheticFunctionType_inGenericFunction() {
        let library = this.checkLibrary('void f<T, U>(bool b) {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'void f<T, U>(bool b) {}
        }else {
            lib6.checkElementText(library,'void f<T, U>(bool b) {}
        }
    }
    test_syntheticFunctionType_noArguments() {
        let library = this.checkLibrary('final v = f() ? () => 0 : () => 1;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'');
        }else {
            lib6.checkElementText(library,'final dynamic v;
        }
    }
    test_syntheticFunctionType_withArguments() {
        let library = this.checkLibrary('final v = f() ? (int x, String y) => 0 : (int x, String y) => 1;
        if (this.isStrongMode) {
            lib6.checkElementText(library,'');
        }else {
            lib6.checkElementText(library,'final dynamic v;
        }
    }
    test_type_arguments_explicit_dynamic_dynamic() {
        let library = this.checkLibrary('Map<dynamic, dynamic> m;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'Map<dynamic, dynamic> m;
        }else {
            lib6.checkElementText(library,'Map<dynamic, dynamic> m;
        }
    }
    test_type_arguments_explicit_dynamic_int() {
        let library = this.checkLibrary('Map<dynamic, int> m;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'Map<dynamic, int> m;
        }else {
            lib6.checkElementText(library,'Map<dynamic, int> m;
        }
    }
    test_type_arguments_explicit_String_dynamic() {
        let library = this.checkLibrary('Map<String, dynamic> m;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'Map<String, dynamic> m;
        }else {
            lib6.checkElementText(library,'Map<String, dynamic> m;
        }
    }
    test_type_arguments_explicit_String_int() {
        let library = this.checkLibrary('Map<String, int> m;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'Map<String, int> m;
        }else {
            lib6.checkElementText(library,'Map<String, int> m;
        }
    }
    test_type_arguments_implicit() {
        let library = this.checkLibrary('Map m;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'Map<dynamic, dynamic> m;
        }else {
            lib6.checkElementText(library,'Map<dynamic, dynamic> m;
        }
    }
    test_type_dynamic() {
        let library = this.checkLibrary('dynamic d;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic d;
        }else {
            lib6.checkElementText(library,'dynamic d;
        }
    }
    test_type_invalid_topLevelVariableElement_asType() {
        let library = this.checkLibrary('class C<T extends V> {}
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F(dynamic p);
        }else {
            lib6.checkElementText(library,'typedef dynamic F(dynamic p);
        }
    }
    test_type_invalid_topLevelVariableElement_asTypeArgument() {
        let library = this.checkLibrary('var V;
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic V;
        }else {
            lib6.checkElementText(library,'dynamic V;
        }
    }
    test_type_invalid_typeParameter_asPrefix() {
        let library = this.checkLibrary('class C<T> {
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> {
        }else {
            lib6.checkElementText(library,'class C<T> {
        }
    }
    test_type_reference_lib_to_lib() {
        let library = this.checkLibrary('class C {} enum E { v } typedef F(); C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F();
        }else {
            lib6.checkElementText(library,'typedef dynamic F();
        }
    }
    test_type_reference_lib_to_part() {
        this.addSource('/a.dart','part of l; class C {} enum E { v } typedef F();');
        let library = this.checkLibrary('library l; part "a.dart"; C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library l;
        }else {
            lib6.checkElementText(library,'library l;
        }
    }
    test_type_reference_part_to_lib() {
        this.addSource('/a.dart','part of l; C c; E e; F f;');
        let library = this.checkLibrary('library l; part "a.dart"; class C {} enum E { v } typedef F();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library l;
        }else {
            lib6.checkElementText(library,'library l;
        }
    }
    test_type_reference_part_to_other_part() {
        this.addSource('/a.dart','part of l; class C {} enum E { v } typedef F();');
        this.addSource('/b.dart','part of l; C c; E e; F f;');
        let library = this.checkLibrary('library l; part "a.dart"; part "b.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library l;
        }else {
            lib6.checkElementText(library,'library l;
        }
    }
    test_type_reference_part_to_part() {
        this.addSource('/a.dart','part of l; class C {} enum E { v } typedef F(); C c; E e; F f;');
        let library = this.checkLibrary('library l; part "a.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library l;
        }else {
            lib6.checkElementText(library,'library l;
        }
    }
    test_type_reference_to_class() {
        let library = this.checkLibrary('class C {} C c;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C {
        }else {
            lib6.checkElementText(library,'class C {
        }
    }
    test_type_reference_to_class_with_type_arguments() {
        let library = this.checkLibrary('class C<T, U> {} C<int, String> c;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {
        }else {
            lib6.checkElementText(library,'class C<T, U> {
        }
    }
    test_type_reference_to_class_with_type_arguments_implicit() {
        let library = this.checkLibrary('class C<T, U> {} C c;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T, U> {
        }else {
            lib6.checkElementText(library,'class C<T, U> {
        }
    }
    test_type_reference_to_enum() {
        let library = this.checkLibrary('enum E { v } E e;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'enum E {
        }else {
            lib6.checkElementText(library,'enum E {
        }
    }
    test_type_reference_to_import() {
        this.addLibrarySource('/a.dart','class C {} enum E { v }; typedef F();');
        let library = this.checkLibrary('import "a.dart"; C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_type_reference_to_import_export() {
        this.addLibrarySource('/a.dart','export "b.dart";');
        this.addLibrarySource('/b.dart','class C {} enum E { v } typedef F();');
        let library = this.checkLibrary('import "a.dart"; C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_type_reference_to_import_export_export() {
        this.addLibrarySource('/a.dart','export "b.dart";');
        this.addLibrarySource('/b.dart','export "c.dart";');
        this.addLibrarySource('/c.dart','class C {} enum E { v } typedef F();');
        let library = this.checkLibrary('import "a.dart"; C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_type_reference_to_import_export_export_in_subdirs() {
        this.addLibrarySource('/a/a.dart','export "b/b.dart";');
        this.addLibrarySource('/a/b/b.dart','export "../c/c.dart";');
        this.addLibrarySource('/a/c/c.dart','class C {} enum E { v } typedef F();');
        let library = this.checkLibrary('import "a/a.dart"; C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a/a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a/a.dart\';
        }
    }
    test_type_reference_to_import_export_in_subdirs() {
        this.addLibrarySource('/a/a.dart','export "b/b.dart";');
        this.addLibrarySource('/a/b/b.dart','class C {} enum E { v } typedef F();');
        let library = this.checkLibrary('import "a/a.dart"; C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a/a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a/a.dart\';
        }
    }
    test_type_reference_to_import_part() {
        this.addLibrarySource('/a.dart','library l; part "b.dart";');
        this.addSource('/b.dart','part of l; class C {} enum E { v } typedef F();');
        let library = this.checkLibrary('import "a.dart"; C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_type_reference_to_import_part2() {
        this.addLibrarySource('/a.dart','library l; part "p1.dart"; part "p2.dart";');
        this.addSource('/p1.dart','part of l; class C1 {}');
        this.addSource('/p2.dart','part of l; class C2 {}');
        let library = this.checkLibrary('import "a.dart"; C1 c1; C2 c2;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_type_reference_to_import_part_in_subdir() {
        this.addLibrarySource('/a/b.dart','library l; part "c.dart";');
        this.addSource('/a/c.dart','part of l; class C {} enum E { v } typedef F();');
        let library = this.checkLibrary('import "a/b.dart"; C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a/b.dart\';
        }else {
            lib6.checkElementText(library,'import \'a/b.dart\';
        }
    }
    test_type_reference_to_import_relative() {
        this.addLibrarySource('/a.dart','class C {} enum E { v } typedef F();');
        let library = this.checkLibrary('import "a.dart"; C c; E e; F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_type_reference_to_typedef() {
        let library = this.checkLibrary('typedef F(); F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F();
        }else {
            lib6.checkElementText(library,'typedef dynamic F();
        }
    }
    test_type_reference_to_typedef_with_type_arguments() {
        let library = this.checkLibrary('typedef U F<T, U>(T t); F<int, String> f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef U F<T, U>(T t);
        }else {
            lib6.checkElementText(library,'typedef U F<T, U>(T t);
        }
    }
    test_type_reference_to_typedef_with_type_arguments_implicit() {
        let library = this.checkLibrary('typedef U F<T, U>(T t); F f;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef U F<T, U>(T t);
        }else {
            lib6.checkElementText(library,'typedef U F<T, U>(T t);
        }
    }
    test_type_unresolved() {
        let library = this.checkLibrary('C c;',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic c;
        }else {
            lib6.checkElementText(library,'dynamic c;
        }
    }
    test_type_unresolved_prefixed() {
        let library = this.checkLibrary('import "dart:core" as core; core.C c;',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:core\' as core;
        }else {
            lib6.checkElementText(library,'import \'dart:core\' as core;
        }
    }
    test_typedef_documented() {
        let library = this.checkLibrary('// Extra comment so doc comment offset != 0
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/**
        }else {
            lib6.checkElementText(library,'/**
        }
    }
    test_typedef_generic() {
        let library = this.checkLibrary('typedef F<T> = int Function<S>(List<S> list, num Function<A>(A), T);');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef F<T> = int Function<S>(List<S> list, <A>(A) → num , T );
        }else {
            lib6.checkElementText(library,'typedef F<T> = int Function<S>(List<S> list, <A>(A) → num , T );
        }
    }
    test_typedef_generic_asFieldType() {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('typedef Foo<S> = S Function<T>(T x);
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef Foo<S> = S Function<T>(T x);
        }else {
            lib6.checkElementText(library,'typedef Foo<S> = S Function<T>(T x);
        }
    }
    test_typedef_parameter_parameters() {
        let library = this.checkLibrary('typedef F(g(x, y));');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F((dynamic, dynamic) → dynamic g);
        }else {
            lib6.checkElementText(library,'typedef dynamic F((dynamic, dynamic) → dynamic g);
        }
    }
    test_typedef_parameter_parameters_in_generic_class() {
        let library = this.checkLibrary('typedef F<A, B>(A g(B x));');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F<A, B>((B) → A g);
        }else {
            lib6.checkElementText(library,'typedef dynamic F<A, B>((B) → A g);
        }
    }
    test_typedef_parameter_return_type() {
        let library = this.checkLibrary('typedef F(int g());');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F(() → int g);
        }else {
            lib6.checkElementText(library,'typedef dynamic F(() → int g);
        }
    }
    test_typedef_parameter_type() {
        let library = this.checkLibrary('typedef F(int i);');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F(int i);
        }else {
            lib6.checkElementText(library,'typedef dynamic F(int i);
        }
    }
    test_typedef_parameter_type_generic() {
        let library = this.checkLibrary('typedef F<T>(T t);');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F<T>(T t);
        }else {
            lib6.checkElementText(library,'typedef dynamic F<T>(T t);
        }
    }
    test_typedef_parameters() {
        let library = this.checkLibrary('typedef F(x, y);');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F(dynamic x, dynamic y);
        }else {
            lib6.checkElementText(library,'typedef dynamic F(dynamic x, dynamic y);
        }
    }
    test_typedef_return_type() {
        let library = this.checkLibrary('typedef int F();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef int F();
        }else {
            lib6.checkElementText(library,'typedef int F();
        }
    }
    test_typedef_return_type_generic() {
        let library = this.checkLibrary('typedef T F<T>();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef T F<T>();
        }else {
            lib6.checkElementText(library,'typedef T F<T>();
        }
    }
    test_typedef_return_type_implicit() {
        let library = this.checkLibrary('typedef F();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef dynamic F();
        }else {
            lib6.checkElementText(library,'typedef dynamic F();
        }
    }
    test_typedef_return_type_void() {
        let library = this.checkLibrary('typedef void F();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef void F();
        }else {
            lib6.checkElementText(library,'typedef void F();
        }
    }
    test_typedef_type_parameters() {
        let library = this.checkLibrary('typedef U F<T, U>(T t);');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef U F<T, U>(T t);
        }else {
            lib6.checkElementText(library,'typedef U F<T, U>(T t);
        }
    }
    test_typedef_type_parameters_bound() {
        let library = this.checkLibrary('typedef U F<T extends Object, U extends D>(T t); class D {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef U F<T extends Object, U extends D>(T t);
        }else {
            lib6.checkElementText(library,'typedef U F<T extends Object, U extends D>(T t);
        }
    }
    test_typedef_type_parameters_bound_recursive() {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('typedef void F<T extends F>();');
        lib6.checkElementText(library,'typedef void F<T extends F>();
    }
    test_typedef_type_parameters_bound_recursive2() {
        this.shouldCompareLibraryElements = false;
        let library = this.checkLibrary('typedef void F<T extends List<F>>();');
        lib6.checkElementText(library,'typedef void F<T extends List<F>>();
    }
    test_typedef_type_parameters_f_bound_complex() {
        let library = this.checkLibrary('typedef U F<T extends List<U>, U>(T t);');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef U F<T extends List<U>, U>(T t);
        }else {
            lib6.checkElementText(library,'typedef U F<T extends List<U>, U>(T t);
        }
    }
    test_typedef_type_parameters_f_bound_simple() {
        let library = this.checkLibrary('typedef U F<T extends U, U>(T t);');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'typedef U F<T extends U, U>(T t);
        }else {
            lib6.checkElementText(library,'typedef U F<T extends U, U>(T t);
        }
    }
    test_typedefs() {
        let library = this.checkLibrary('f() {} g() {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic f() {}
        }else {
            lib6.checkElementText(library,'dynamic f() {}
        }
    }
    test_unresolved_annotation_instanceCreation_argument_super() {
        let library = this.checkLibrary('class A {
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class A {
        }else {
            lib6.checkElementText(library,'class A {
        }
    }
    test_unresolved_annotation_instanceCreation_argument_this() {
        let library = this.checkLibrary('class A {
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class A {
        }else {
            lib6.checkElementText(library,'class A {
        }
    }
    test_unresolved_annotation_namedConstructorCall_noClass() {
        let library = this.checkLibrary('@foo.bar() class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@
        }else {
            lib6.checkElementText(library,'@
        }
    }
    test_unresolved_annotation_namedConstructorCall_noConstructor() {
        let library = this.checkLibrary('@String.foo() class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@
        }else {
            lib6.checkElementText(library,'@
        }
    }
    test_unresolved_annotation_prefixedIdentifier_badPrefix() {
        let library = this.checkLibrary('@foo.bar class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@
        }else {
            lib6.checkElementText(library,'@
        }
    }
    test_unresolved_annotation_prefixedIdentifier_noDeclaration() {
        let library = this.checkLibrary('import "dart:async" as foo; @foo.bar class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\' as foo;
        }else {
            lib6.checkElementText(library,'import \'dart:async\' as foo;
        }
    }
    test_unresolved_annotation_prefixedNamedConstructorCall_badPrefix() {
        let library = this.checkLibrary('@foo.bar.baz() class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@
        }else {
            lib6.checkElementText(library,'@
        }
    }
    test_unresolved_annotation_prefixedNamedConstructorCall_noClass() {
        let library = this.checkLibrary('import "dart:async" as foo; @foo.bar.baz() class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\' as foo;
        }else {
            lib6.checkElementText(library,'import \'dart:async\' as foo;
        }
    }
    test_unresolved_annotation_prefixedNamedConstructorCall_noConstructor() {
        let library = this.checkLibrary('import "dart:async" as foo; @foo.Future.bar() class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\' as foo;
        }else {
            lib6.checkElementText(library,'import \'dart:async\' as foo;
        }
    }
    test_unresolved_annotation_prefixedUnnamedConstructorCall_badPrefix() {
        let library = this.checkLibrary('@foo.bar() class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@
        }else {
            lib6.checkElementText(library,'@
        }
    }
    test_unresolved_annotation_prefixedUnnamedConstructorCall_noClass() {
        let library = this.checkLibrary('import "dart:async" as foo; @foo.bar() class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'dart:async\' as foo;
        }else {
            lib6.checkElementText(library,'import \'dart:async\' as foo;
        }
    }
    test_unresolved_annotation_simpleIdentifier() {
        let library = this.checkLibrary('@foo class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@
        }else {
            lib6.checkElementText(library,'@
        }
    }
    test_unresolved_annotation_unnamedConstructorCall_noClass() {
        let library = this.checkLibrary('@foo() class C {}',{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'@
        }else {
            lib6.checkElementText(library,'@
        }
    }
    test_unresolved_export() {
        this.allowMissingFiles = true;
        let library = this.checkLibrary("export 'foo.dart';",{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'export \'foo.dart\';
        }else {
            lib6.checkElementText(library,'export \'foo.dart\';
        }
    }
    test_unresolved_import() {
        this.allowMissingFiles = true;
        let library : any = this.checkLibrary("import 'foo.dart';",{
            allowErrors : true});
        let importedLibrary : any = op(Op.INDEX,library.imports,0).importedLibrary;
        expect(importedLibrary.loadLibraryFunction,isNotNull);
        expect(importedLibrary.publicNamespace,isNotNull);
        expect(importedLibrary.exportNamespace,isNotNull);
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'foo.dart\';
        }else {
            lib6.checkElementText(library,'import \'foo.dart\';
        }
    }
    test_unresolved_part() {
        this.allowMissingFiles = true;
        let library = this.checkLibrary("part 'foo.dart';",{
            allowErrors : true});
        if (this.isStrongMode) {
            lib6.checkElementText(library,'part \'foo.dart\';
        }else {
            lib6.checkElementText(library,'part \'foo.dart\';
        }
    }
    test_unused_type_parameter() {
        let library = this.checkLibrary('class C<T> {
        if (this.isStrongMode) {
            lib6.checkElementText(library,'class C<T> {
        }else {
            lib6.checkElementText(library,'class C<T> {
        }
    }
    test_variable_const() {
        let library = this.checkLibrary('const int i = 0;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const int i = 0;
        }else {
            lib6.checkElementText(library,'const int i = 0;
        }
    }
    test_variable_documented() {
        let library = this.checkLibrary('// Extra comment so doc comment offset != 0
        if (this.isStrongMode) {
            lib6.checkElementText(library,'/**
        }else {
            lib6.checkElementText(library,'/**
        }
    }
    test_variable_final() {
        let library = this.checkLibrary('final int x = 0;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'final int x;
        }else {
            lib6.checkElementText(library,'final int x;
        }
    }
    test_variable_final_top_level_untyped() {
        let library = this.checkLibrary('final v = 0;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'final int v;
        }else {
            lib6.checkElementText(library,'final dynamic v;
        }
    }
    test_variable_getterInLib_setterInPart() {
        this.addSource('/a.dart','part of my.lib; void set x(int _) {}');
        let library = this.checkLibrary('library my.lib; part "a.dart"; int get x => 42;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library my.lib;
        }else {
            lib6.checkElementText(library,'library my.lib;
        }
    }
    test_variable_getterInPart_setterInLib() {
        this.addSource('/a.dart','part of my.lib; int get x => 42;');
        let library = this.checkLibrary('library my.lib; part "a.dart"; void set x(int _) {}');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library my.lib;
        }else {
            lib6.checkElementText(library,'library my.lib;
        }
    }
    test_variable_getterInPart_setterInPart() {
        this.addSource('/a.dart','part of my.lib; int get x => 42;');
        this.addSource('/b.dart','part of my.lib; void set x(int _) {}');
        let library = this.checkLibrary('library my.lib; part "a.dart"; part "b.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library my.lib;
        }else {
            lib6.checkElementText(library,'library my.lib;
        }
    }
    test_variable_implicit_type() {
        let library = this.checkLibrary('var x;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'dynamic x;
        }else {
            lib6.checkElementText(library,'dynamic x;
        }
    }
    test_variable_inferred_type_implicit_initialized() {
        let library = this.checkLibrary('var v = 0;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'int v;
        }else {
            lib6.checkElementText(library,'dynamic v;
        }
    }
    test_variable_propagatedType_const_noDep() {
        let library = this.checkLibrary('const i = 0;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'const int i = 0;
        }else {
            lib6.checkElementText(library,'const dynamic i = 0;
        }
    }
    test_variable_propagatedType_final_dep_inLib() {
        this.addLibrarySource('/a.dart','final a = 1;');
        let library = this.checkLibrary('import "a.dart"; final b = a / 2;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'a.dart\';
        }else {
            lib6.checkElementText(library,'import \'a.dart\';
        }
    }
    test_variable_propagatedType_final_dep_inPart() {
        this.addSource('/a.dart','part of lib; final a = 1;');
        let library = this.checkLibrary('library lib; part "a.dart"; final b = a / 2;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library lib;
        }else {
            lib6.checkElementText(library,'library lib;
        }
    }
    test_variable_propagatedType_final_noDep() {
        let library = this.checkLibrary('final i = 0;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'final int i;
        }else {
            lib6.checkElementText(library,'final dynamic i;
        }
    }
    test_variable_propagatedType_implicit_dep() {
        this.addLibrarySource('/a.dart','class C {}');
        this.addLibrarySource('/b.dart','import "a.dart"; C f() => null;');
        let library = this.checkLibrary('import "b.dart"; final x = f();');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'import \'b.dart\';
        }else {
            lib6.checkElementText(library,'import \'b.dart\';
        }
    }
    test_variable_setterInPart_getterInPart() {
        this.addSource('/a.dart','part of my.lib; void set x(int _) {}');
        this.addSource('/b.dart','part of my.lib; int get x => 42;');
        let library = this.checkLibrary('library my.lib; part "a.dart"; part "b.dart";');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'library my.lib;
        }else {
            lib6.checkElementText(library,'library my.lib;
        }
    }
    test_variables() {
        let library = this.checkLibrary('int i; int j;');
        if (this.isStrongMode) {
            lib6.checkElementText(library,'int i;
        }else {
            lib6.checkElementText(library,'int i;
        }
    }
    validateGetElement(text : string,original : any) : any {
        let resynthesizer : any = this.encodeDecodeLibrarySource(original.library.source);
        let location : any = original.location;
        let result : any = resynthesizer.getElement(location);
        this.checkMinimalResynthesisWork(resynthesizer,original.library);
        expect(resynthesizer.resynthesisCount,3);
        expect(result.location,location);
        return result;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResynthesizeTest() {
    }
}

export class properties {
}