'use strict';mix_d("TellAmazonDesktopCards__tell-amazon-desktop:tell-amazon-desktop__gO8JxAv6","exports tslib @c/scoped-dom @c/aui-modal @c/browser-operations @c/remote-operations @p/A @p/a-dropdown".split(" "),function(R,b,z,ea,S,T,fa,ha){function H(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}var F=H(z),ia=H(ea),U=H(fa),ja=H(ha),B;(function(a){a.openTellAmazonModal="openTellAmazonModal";a.openTellAmazonBottomSheet="openTellAmazonBottomSheet";a.submitForm="submit"})(B||(B={}));
z={dropdown:{options:{problemWithOrder:{components:{alert:[{type:"yourAccountAlert"}],submitButton:{type:"hidden"}}},productInformationMissingInaccurateOrImproved:{components:{dropdown:{options:{images:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},sizeDimensions:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},releaseInformation:{components:{freeformText:{required:!1,
title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},modelEdition:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},brand:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},other:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}}},prompt:"choose",
title:"whatInformationMissingImprovement"}}},partOfThisPageDontMatch:{components:{checkbox:{options:[{value:"reviews",required:!1},{value:"images",required:!1},{value:"title",required:!1},{value:"bulletPoints",required:!1},{value:"brand",required:!1},{value:"other",required:!1}],title:"whichPartsDontMatch"},freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},issueWithPrice:{components:{dropdown:{options:{priceDisparity:{components:{freeformText:{required:!1,
title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},haveFoundLowerPrice:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},discountCouponError:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},higherShippingCosts:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},
pricesForUsedHigher:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},other:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}}},prompt:"choose",title:"whatsTheIssue"}}},productContentOffensive:{components:{dropdown:{options:{sexuallyExplicitContent:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},
other:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}}},prompt:"choose",title:"whyIsItOffensive"}}},productContentIllegalUnsafeSuspicious:{components:{dropdown:{options:{itsCounterfeit:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},usesMyIntellectualPropertyWithoutPermission:{components:{alert:[{type:"goToPnfAlert"}],
submitButton:{type:"hidden"}}},notSafeCompliantProductSafetyRegulations:{components:{dropdown:{options:{haveInformationShowingItemNotSafe:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},warningsDisclaimersMarkings:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"},
{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},missingProductAuthorization:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},instructionsForUse:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],
submitButton:{type:"submit"}}},contactDetails:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},other:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}}},prompt:"choose",title:"whyIsntProductSafeCompliant"}}},
reviewsQuestionsAnswersContainIllegal:{components:{dropdown:{options:{productReviewFakeIllegal:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details",guideline:"pleaseIncludeLinkSpecificReview"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},userProfileInformationReviewsIllegalContent:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details",
guideline:"pleaseIncludeLinkSpecificReview"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},customerQuestionsAnswersIllegalContent:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details",guideline:"pleaseIncludeLinkSpecifyQuestionAnswer"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}}},prompt:"choose",title:"whereIsIssue"}}},productContentOtherwiseIllegal:{components:{dropdown:{options:{firearmIllegalWeapon:{components:{checkbox:{options:[{value:"goodFaith",
required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},illegalDrugMedicine:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},containsProhibitedIngredientsSubstances:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],
title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},imageProductDescriptionContainsIllegalContent:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},other:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,
title:"details"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}}},prompt:"choose",title:"whyIllegal"}}}},prompt:"choose",title:"whatsTheIssue"}}},iHaveIssueWithSeller:{components:{dropdown:{options:{sellerIsUsingFalseOrMisleadingIdentityInformation:{components:{dropdown:{options:{sellerIsRepresentingMyBusinessInformationAsItsOwn:{components:{freeformText:{required:!0,title:"describeTheIssue",guideline:"pleaseProvideStoreNameSeller"},alert:[{type:"noPersonalInfoAlert"},
{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},sellerIsUsingMyPersonalInformationAsItsOwn:{components:{freeformText:{required:!0,title:"describeTheIssue",guideline:"pleaseProvideStoreNameSeller"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},other:{components:{freeformText:{required:!0,title:"describeTheIssue",guideline:"pleaseProvideStoreNameSeller"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}}},
prompt:"choose",title:"whatsTheIssue"}}},sellerIsUsingFalseOrMisleadingContactInformation:{components:{dropdown:{options:{sellerIsUsingAFalseOrInaccurateAddressInformation:{components:{freeformText:{required:!0,title:"describeTheIssue",guideline:"pleaseProvideStoreNameSeller"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},sellerIsUsingAFalseOrInaccuratePhoneNumber:{components:{freeformText:{required:!0,title:"describeTheIssue",guideline:"pleaseProvideStoreNameSeller"},
alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},other:{components:{freeformText:{required:!0,title:"describeTheIssue",guideline:"pleaseProvideStoreNameSeller"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}}},prompt:"choose",title:"whatsTheIssue"}}},sellerIsAttemptingToManipulateReviews:{components:{dropdown:{options:{sellerIsSendingMeUnwantedCommunicationsAboutAReviewIPosted:{components:{freeformText:{required:!0,
title:"describeTheIssue",guideline:"pleaseProvideStoreNameSeller"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},sellerIsOfferingMeMoneyToPostOrRemoveAReview:{components:{freeformText:{required:!0,title:"describeTheIssue",guideline:"pleaseProvideStoreNameSeller"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},other:{components:{freeformText:{required:!0,title:"describeTheIssue",guideline:"pleaseProvideStoreNameSeller"},
alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}}},prompt:"choose",title:"whatsTheIssue"}}},sellerIsEngagingInOtherInappropriateActivity:{components:{dropdown:{options:{sellerIsSendingMeUnsolicitedInappropriateCommunications:{components:{freeformText:{required:!0,title:"describeTheIssue",guideline:"pleaseProvideStoreNameSeller"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},sellerIsAttemptingToDamageMyBusiness:{components:{freeformText:{required:!0,
title:"describeTheIssue",guideline:"pleaseProvideStoreNameSeller"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},sellerIsUsingUnfairOrDeceptiveBusinessTactics:{components:{freeformText:{required:!0,title:"describeTheIssue",guideline:"pleaseProvideStoreNameSeller"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}},other:{components:{freeformText:{required:!0,title:"describeTheIssue",guideline:"pleaseProvideStoreNameSeller"},
alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}}},prompt:"choose",title:"whatsTheIssue"}}},otherIssueWithSeller:{components:{freeformText:{required:!0,title:"describeTheIssue",guideline:"pleaseProvideStoreNameSeller"},alert:[{type:"noPersonalInfoAlert"},{type:"tellAmazonAlertC2c"}],submitButton:{type:"submit"}}}},prompt:"choose",title:"whatsTheIssue"}}},other:{components:{freeformText:{required:!1,title:"whatsTheIssue"},alert:[{type:"noPersonalInfoAlert"}],
submitButton:{type:"submit"}}}},prompt:"choose",title:"whatIsWrongWithThisPage"}};var ka={__proto__:null,components:z,"default":{components:z}};z={dropdown:{options:{problemWithOrder:{components:{alert:[{type:"yourAccountAlert"}],submitButton:{type:"hidden"}}},productInformationMissingInaccurateOrImproved:{components:{dropdown:{options:{images:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},sizeDimensions:{components:{freeformText:{required:!1,
title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},releaseInformation:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},modelEdition:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},brand:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},other:{components:{freeformText:{required:!1,
title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}}},prompt:"choose",title:"whatInformationMissingImprovement"}}},partOfThisPageDontMatch:{components:{checkbox:{options:[{value:"reviews",required:!1},{value:"images",required:!1},{value:"title",required:!1},{value:"bulletPoints",required:!1},{value:"brand",required:!1},{value:"other",required:!1}],title:"whichPartsDontMatch"},freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},
issueWithPrice:{components:{dropdown:{options:{priceDisparity:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},haveFoundLowerPrice:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},discountCouponError:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},higherShippingCosts:{components:{freeformText:{required:!1,
title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},pricesForUsedHigher:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},other:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}}},prompt:"choose",title:"whatsTheIssue"}}},productContentOffensive:{components:{dropdown:{options:{sexuallyExplicitContent:{components:{freeformText:{required:!1,
title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},other:{components:{freeformText:{required:!1,title:"comments"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}}},prompt:"choose",title:"whyIsItOffensive"}}},productContentIllegalUnsafeSuspicious:{components:{dropdown:{options:{itsCounterfeit:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"}],
submitButton:{type:"submit"}}},usesMyIntellectualPropertyWithoutPermission:{components:{alert:[{type:"goToPnfAlert"}],submitButton:{type:"hidden"}}},notSafeCompliantProductSafetyRegulations:{components:{dropdown:{options:{haveInformationShowingItemNotSafe:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},warningsDisclaimersMarkings:{components:{checkbox:{options:[{value:"goodFaith",
required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},missingProductAuthorization:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},instructionsForUse:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"}],
submitButton:{type:"submit"}}},contactDetails:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},other:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}}},prompt:"choose",title:"whyIsntProductSafeCompliant"}}},reviewsQuestionsAnswersContainIllegal:{components:{dropdown:{options:{productReviewFakeIllegal:{components:{checkbox:{options:[{value:"goodFaith",
required:!0}],title:""},freeformText:{required:!0,title:"details",guideline:"pleaseIncludeLinkSpecificReview"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},userProfileInformationReviewsIllegalContent:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details",guideline:"pleaseIncludeLinkSpecificReview"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},customerQuestionsAnswersIllegalContent:{components:{checkbox:{options:[{value:"goodFaith",
required:!0}],title:""},freeformText:{required:!0,title:"details",guideline:"pleaseIncludeLinkSpecifyQuestionAnswer"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}}},prompt:"choose",title:"whereIsIssue"}}},productContentOtherwiseIllegal:{components:{dropdown:{options:{firearmIllegalWeapon:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},illegalDrugMedicine:{components:{checkbox:{options:[{value:"goodFaith",
required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},containsProhibitedIngredientsSubstances:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},imageProductDescriptionContainsIllegalContent:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,
title:"details"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}},other:{components:{checkbox:{options:[{value:"goodFaith",required:!0}],title:""},freeformText:{required:!0,title:"details"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}}},prompt:"choose",title:"whyIllegal"}}}},prompt:"choose",title:"whatsTheIssue"}}},other:{components:{freeformText:{required:!1,title:"whatsTheIssue"},alert:[{type:"noPersonalInfoAlert"}],submitButton:{type:"submit"}}}},prompt:"choose",
title:"whatIsWrongWithThisPage"}};var la={__proto__:null,components:z,"default":{components:z}},w={tellAmazonForm:"_tell-amazon-desktop_style_tell_amazon_form__2ODTj",tellAmazonFormPage:"_tell-amazon-desktop_style_tell_amazon_form_page__xbPk_",tellAmazonFormHeader:"_tell-amazon-desktop_style_tell_amazon_form_header__CgK4a",tellAmazonComponentPreload:"_tell-amazon-desktop_style_tell_amazon_component_preload__2jBs4",tellAmazonThankyouPage:"_tell-amazon-desktop_style_tell_amazon_thankyou_page__1PP1x",
tellAmazonDropdown:"_tell-amazon-desktop_style_tell_amazon_dropdown__3USiH",tellAmazonDropdownLabel:"_tell-amazon-desktop_style_tell_amazon_dropdown_label__2ydKL",tellAmazonDropdownTemplate:"_tell-amazon-desktop_style_tell_amazon_dropdown_template__PUCsd",tellAmazonChildLevelTemplate:"_tell-amazon-desktop_style_tell_amazon_child_level_template__31ciK",tellAmazonChildLevel0:"_tell-amazon-desktop_style_tell_amazon_child_level_0__1nx1M",tellAmazonChildLevel1:"_tell-amazon-desktop_style_tell_amazon_child_level_1__3C9FE",
tellAmazonChildLevel2:"_tell-amazon-desktop_style_tell_amazon_child_level_2__2TO5W",tellAmazonChildLevel3:"_tell-amazon-desktop_style_tell_amazon_child_level_3__3BiD-",tellAmazonChildLevel4:"_tell-amazon-desktop_style_tell_amazon_child_level_4__9OPCD",tellAmazonChildLevel5:"_tell-amazon-desktop_style_tell_amazon_child_level_5__1kUDE",tellAmazonChildLevel6:"_tell-amazon-desktop_style_tell_amazon_child_level_6__1WZVb",tellAmazonChildLevel7:"_tell-amazon-desktop_style_tell_amazon_child_level_7__3zhxb",
tellAmazonChildLevel8:"_tell-amazon-desktop_style_tell_amazon_child_level_8__wWrG8",tellAmazonChildLevel9:"_tell-amazon-desktop_style_tell_amazon_child_level_9__2vXhO",tellAmazonChildLevel10:"_tell-amazon-desktop_style_tell_amazon_child_level_10__3jKE7",tellAmazonChildLevel11:"_tell-amazon-desktop_style_tell_amazon_child_level_11__1Hi2o",tellAmazonAlert:"_tell-amazon-desktop_style_tell_amazon_alert__v0WPx",tellAmazonAlertComponentContainer:"_tell-amazon-desktop_style_tell_amazon_alert_component_container__1uRvo",
alertType:"_tell-amazon-desktop_style_alert_type__34m2d",tellAmazonFreeformTextTemplate:"_tell-amazon-desktop_style_tell_amazon_freeform_text_template__2AANf",tellAmazonFreeformText:"_tell-amazon-desktop_style_tell_amazon_freeform_text__DOb62",tellAmazonDetailsGuideline:"_tell-amazon-desktop_style_tell_amazon_details_guideline__1Otgw",tellAmazonSubmit:"_tell-amazon-desktop_style_tell_amazon_submit__3XPWj",tellAmazonSubmitButton:"_tell-amazon-desktop_style_tell_amazon_submit_button__36rF0",tellAmazonTryAgainMessage:"_tell-amazon-desktop_style_tell_amazon_try_again_message__3L5ej",
tellAmazonCheckboxComponent:"_tell-amazon-desktop_style_tell_amazon_checkbox_component__2mOqM",tellAmazonCheckboxTemplate:"_tell-amazon-desktop_style_tell_amazon_checkbox_template__2Bgy6",tellAmazonFieldsetLegend:"_tell-amazon-desktop_style_tell_amazon_fieldset_legend__2y8__",tellAmazonCheckboxContainer:"_tell-amazon-desktop_style_tell_amazon_checkbox_container__1xD5N"},ma=function(){return function(a){var c=this;this.value="";this.children=[];this.renderDropdown=function(){return b.__awaiter(c,void 0,
void 0,function(){var n,l=this;return b.__generator(this,function(p){switch(p.label){case 0:return[4,this.loadDropdown()];case 1:return p.sent(),this.dropdown=ja["default"].getSelect(this.dropdownId),[4,this.dropdown.update({status:"normal"})];case 2:return p.sent(),this.dropdown.removeOptions(),this.dropdown.setValue(""),this.dropdown.update({option_prompt:this.strings[this.prompt]||this.prompt}),this.select=this.parent.querySelector("#"+this.dropdownId),this.select.required=this.required,this.select.addEventListener("invalid",
this.onInvalid),n=Object.keys(this.options).map(function(m){return{value:m,text:l.strings[m]||m}}),[4,this.dropdown.addOptions(n)];case 3:return p.sent(),U["default"].on("a:dropdown:selected:"+this.dropdownId,this.updateChildren),[2]}})})};this.loadDropdown=function(){return b.__awaiter(c,void 0,void 0,function(){var n,l,p,m,r;return b.__generator(this,function(u){n=this.formPage.getElementsByClassName(w.tellAmazonDropdownTemplate)[0];l=n.cloneNode(!0);l.className=w.tellAmazonDropdown;p=l.querySelector("label");
p.setAttribute("for",this.dropdownId);p.className=w.tellAmazonDropdownLabel;m=this.strings[this.title]||this.title;r=l.querySelector("select");r.name=this.dropdownId;r.id=this.dropdownId;this.required&&(m+=' <span aria-hidden="true">*</span>');p.innerHTML=m;this.childElement=l.getElementsByClassName(w.tellAmazonChildLevelTemplate)[0];this.childElement.className=w["tellAmazonChildLevel"+this.level];this.parent.appendChild(l);return[2]})})};this.updateChildren=function(n){return b.__awaiter(c,void 0,
void 0,function(){var l,p,m,r,u,x,I,V,L,W;return b.__generator(this,function(y){switch(y.label){case 0:return[4,this.dropdown.update({status:"normal"})];case 1:y.sent(),this.destroyChildren(this.children),this.handleSubmitButtonComponent(),this.value=n.value,l=this.options[this.value],this.childElement.innerHTML="",p=[],y.label=2;case 2:y.trys.push([2,7,8,9]),m=b.__values(Object.keys(l.components)),r=m.next(),y.label=3;case 3:if(r.done)return[3,6];u=r.value;I=(x=p).push;return[4,this.buildComponent(l.components[u],
u,this.childElement,this.level+1)];case 4:I.apply(x,[y.sent()]),y.label=5;case 5:return r=m.next(),[3,3];case 6:return[3,9];case 7:return V=y.sent(),L={error:V},[3,9];case 8:try{r&&!r.done&&(W=m.return)&&W.call(m)}finally{if(L)throw L.error;}return[7];case 9:return this.children=p,[2]}})})};this.destroyChildren=function(n){n&&0<n.length&&n.forEach(function(l){c.destroyChildren(l.children);U["default"].off("a:dropdown:selected:"+l.dropdownId)});c.children=[]};this.onInvalid=function(n){return b.__awaiter(c,
void 0,void 0,function(){return b.__generator(this,function(l){switch(l.label){case 0:return[4,this.dropdown.update({status:"error"})];case 1:return l.sent(),[2]}})})};var h=a.level,e=a.options,d=a.parent,g=a.prompt,f=a.title,k=a.required,q=a.strings,v=a.buildComponent,t=a.handleSubmitButtonComponent;this.formPage=a.formPage;this.parent=d;this.options=e;this.level=h;this.prompt=g;this.title=f;this.required=k;this.strings=q;this.dropdownId="tellAmazonDropdownLevel"+h;this.buildComponent=v;this.handleSubmitButtonComponent=
t}}(),na=function(){return function(a){var c=this;this.renderAlert=function(){return b.__awaiter(c,void 0,void 0,function(){return b.__generator(this,function(k){switch(k.label){case 0:return[4,this.loadAlert()];case 1:return k.sent(),[2]}})})};this.loadAlert=function(){return b.__awaiter(c,void 0,void 0,function(){var k,q,v,t;return b.__generator(this,function(n){k=this.formPage.getElementsByClassName(w.tellAmazonAlertComponentContainer)[0];q=k.cloneNode(!0);q.className="";v=q.querySelector("#tellAmazonAlertComponent");
v.id="tellAmazonAlert"+this.level;t=v.querySelector("."+w.alertType+"[data-type="+this.type+"]");t.style.display="block";this.text&&(t.textContent=this.strings[this.text]||this.text);this.parent.appendChild(q);return[2]})})};var h=a.formPage,e=a.level,d=a.parent,g=a.strings,f=a.type;if(a=a.text)this.text=a;this.formPage=h;this.level=e;this.parent=d;this.strings=g;this.type=f}}(),oa=function(){return function(a){var c=this;this.renderFreeformText=function(){return b.__awaiter(c,void 0,void 0,function(){return b.__generator(this,
function(q){switch(q.label){case 0:return[4,this.loadFreeformText()];case 1:return q.sent(),[2]}})})};this.loadFreeformText=function(){return b.__awaiter(c,void 0,void 0,function(){var q,v,t,n,l,p,m;return b.__generator(this,function(r){q="tellAmazonFreeformTextLevel"+this.level;v=this.formPage.getElementsByClassName(w.tellAmazonFreeformTextTemplate)[0];t=v.cloneNode(!0);t.className=w.tellAmazonFreeformText;t.dataset.level=""+this.level;n=t.querySelector("label");n.setAttribute("for",q);l=this.strings[this.title]||
this.title;this.required?n.innerHTML=l+' <span aria-hidden="true">*</span>':n.textContent=l+" ("+this.strings.optional+")";p=t.querySelector("textarea");p.id=q;p.required=this.required;m=t.querySelector("#tellAmazon_guidelineTemplate");m.id=q+"_guideline";m.textContent=this.strings[this.guideline]||this.guideline||"";this.parent.appendChild(t);return[2]})})};var h=a.formPage,e=a.level,d=a.parent,g=a.strings,f=a.required,k=a.title;if(a=a.guideline)this.guideline=a;this.formPage=h;this.level=e;this.parent=
d;this.strings=g;this.required=f;this.title=k}}(),pa=function(){return function(a){var c=this;this.renderCheckbox=function(){return b.__awaiter(c,void 0,void 0,function(){return b.__generator(this,function(k){switch(k.label){case 0:return[4,this.loadCheckboxes()];case 1:return k.sent(),[2]}})})};this.loadCheckboxes=function(){return b.__awaiter(c,void 0,void 0,function(){var k,q,v,t,n,l=this;return b.__generator(this,function(p){k=this.formPage.getElementsByClassName(w.tellAmazonCheckboxComponent)[0];
q=k.cloneNode(!0);q.className="tellAmazonCheckboxGroup"+this.level;v=q.getElementsByClassName(w.tellAmazonFieldsetLegend)[0];v.textContent=this.strings[this.title]||this.title;t=q.querySelector("[data-name=template]");n=q.getElementsByClassName(w.tellAmazonCheckboxContainer)[0];this.options.forEach(function(m){var r="tellAmazon_"+m.value+"Checkbox"+l.level,u=t.cloneNode(!0);u.dataset.name=m.value;u.querySelector("label").setAttribute("for",r);var x=u.querySelector("input");x.id=r;x.name=m.value;x.value=
m.value;x.required=m.required;r=u.querySelector("span");x=l.strings[m.value]||m.value;m.required&&(x+=' <span aria-hidden="true">*</span>');r.innerHTML=x;n.appendChild(u)});this.parent.appendChild(q);return[2]})})};var h=a.level,e=a.parent,d=a.strings,g=a.title,f=a.options;this.formPage=a.formPage;this.parent=e;this.strings=d;this.title=g;this.options=f;this.level=h}}(),G,X,C,Y,Z,J,M=!1,A;(function(a){a.ALERT="alert";a.DROPDOWN="dropdown";a.FREEFORM="freeformText";a.SUBMIT="submitButton";a.CHECKBOX=
"checkbox"})(A||(A={}));var ra=function(a,c,h,e,d,g,f){return b.__awaiter(void 0,void 0,void 0,function(){return b.__generator(this,function(k){switch(k.label){case 0:return X=a.getElementsByClassName(w.tellAmazonForm)[0],Z=a.getElementsByClassName(w.tellAmazonTryAgainMessage)[0],C=a.getElementsByClassName(w.tellAmazonFormPage)[0],Y=a.getElementsByClassName(w.tellAmazonThankyouPage)[0],qa(a,e,d,g,f),G=h,c.components.dropdown?[4,aa(c.components.dropdown,0,X)]:[3,2];case 1:k.sent(),k.label=2;case 2:return[2]}})})},
va=function(a,c,h,e){return b.__awaiter(void 0,void 0,void 0,function(){var d,g;return b.__generator(this,function(f){switch(f.label){case 0:d="";g=c;switch(g){case A.ALERT:return[3,1];case A.DROPDOWN:return[3,3];case A.FREEFORM:return[3,5];case A.SUBMIT:return[3,7];case A.CHECKBOX:return[3,8]}return[3,10];case 1:return[4,sa(a,e,h)];case 2:return d=f.sent(),[3,11];case 3:return[4,aa(a,e,h)];case 4:return d=f.sent(),[3,11];case 5:return[4,ta(a,e,h)];case 6:return d=f.sent(),[3,11];case 7:return ba(a),
[3,11];case 8:return[4,ua(a,e,h)];case 9:return d=f.sent(),[3,11];case 10:return[3,11];case 11:return[2,d]}})})},aa=function(a,c,h){return b.__awaiter(void 0,void 0,void 0,function(){var e,d,g,f;return b.__generator(this,function(k){switch(k.label){case 0:return e=a.options,d=a.prompt,g=a.title,f=new ma({formPage:C,level:c,options:e,parent:h,prompt:d,title:g,required:!0,strings:G,buildComponent:va,handleSubmitButtonComponent:ba}),[4,f.renderDropdown()];case 1:return k.sent(),[2,f]}})})},sa=function(a,
c,h){return b.__awaiter(void 0,void 0,void 0,function(){var e,d,g,f,k,q,v,t,n,l;return b.__generator(this,function(p){switch(p.label){case 0:e=[],p.label=1;case 1:p.trys.push([1,6,7,8]),d=b.__values(a),g=d.next(),p.label=2;case 2:if(g.done)return[3,5];f=g.value;k=f.type;q=f.text;v=new na({formPage:C,level:c,parent:h,strings:G,type:k,text:q});return[4,v.renderAlert()];case 3:p.sent(),e.push(v),p.label=4;case 4:return g=d.next(),[3,2];case 5:return[3,8];case 6:return t=p.sent(),n={error:t},[3,8];case 7:try{g&&
!g.done&&(l=d.return)&&l.call(d)}finally{if(n)throw n.error;}return[7];case 8:return[2,e]}})})},ta=function(a,c,h){return b.__awaiter(void 0,void 0,void 0,function(){var e,d,g,f;return b.__generator(this,function(k){switch(k.label){case 0:return e=a.required,d=a.title,g=a.guideline,f=new oa({formPage:C,level:c,parent:h,strings:G,required:e,title:d,guideline:g}),[4,f.renderFreeformText()];case 1:return k.sent(),[2,f]}})})},ua=function(a,c,h){return b.__awaiter(void 0,void 0,void 0,function(){var e,
d,g;return b.__generator(this,function(f){switch(f.label){case 0:return e=a.options,d=a.title,g=new pa({formPage:C,level:c,parent:h,strings:G,title:d,options:e}),[4,g.renderCheckbox()];case 1:return f.sent(),[2,g]}})})},ba=function(a){J.style.display=a&&"hidden"===a.type?"none":"block"},qa=function(a,c,h,e,d){J=a.getElementsByClassName(w.tellAmazonSubmit)[0];var g=S.setup();g.define(B.submitForm,"submit",function(f){return b.__awaiter(void 0,void 0,void 0,function(){return b.__generator(this,function(k){switch(k.label){case 0:return[4,
wa(f,c,h,e,d)];case 1:return k.sent(),f.stopBubble(),[2]}})})});(a=a.querySelector("#tellAmazonModal_form"))&&g.attach(B.submitForm,a)},wa=function(a,c,h,e,d){return b.__awaiter(void 0,void 0,void 0,function(){var g,f;return b.__generator(this,function(k){g=a.event.target;a.event.preventDefault();if(M||!g.checkValidity())return[2];N(!0);if(e){var q=k=b.__assign,v,t=[],n={checkboxes:t,dropdownSelections:"",userComments:""},l=[],p=[];try{for(var m=b.__values(Array.from(g.elements)),r=m.next();!r.done;r=
m.next()){var u=r.value;"INPUT"===u.nodeName&&"checkbox"===u.type&&u.checked?t.push(u.name):"TEXTAREA"===u.nodeName?l.push(u.value):"SELECT"===u.nodeName&&p.push(u.value)}}catch(I){var x={error:I}}finally{try{r&&!r.done&&(v=m.return)&&v.call(m)}finally{if(x)throw x.error;}}n.dropdownSelections=p.join(",");n.userComments=l.join(",");f=k.call(b,q.call(b,{},n),{asin:e,weblab:"",customerEmail:h,deviceType:c});d&&(f.weblab=JSON.stringify(d).replace(/\{/g,"").replace(/\}/g,"").replace(/"/g,""));xa(f)}return[2]})})},
xa=function(a){return b.__awaiter(void 0,void 0,void 0,function(){var c,h;return b.__generator(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),c=T.setup(),h=void 0,[4,c.sendDefectToNoreaster({formValues:a})];case 1:return(h=e.sent())?(C.style.display="none",Y.style.display="block",O(!1)):O(!0),N(!1),[3,3];case 2:return e.sent(),O(!0),N(!1),[3,3];case 3:return[2]}})})},N=function(a){a?(J.classList.add("a-button-disabled"),M=!0):(J.classList.remove("a-button-disabled"),M=!1)},O=
function(a){Z.style.display=a?"block":"none"},P;(function(a){a.US="ATVPDKIKX0DER";a.UK="A1F83G8C2ARO7P";a.JP="A1VC38T7YXB528";a.CA="A2EUQ1WTGCTBG2";a.DE="A1PA6795UKMFR9";a.FR="A13V1IB3VIYZZH";a.IT="APJ6JRA9NG5V4";a.ES="A1RKKUPIHCS9HS";a.EG="ARBP9OOSHTCHU";a.IN="A21TJRUUN4KGV";a.CN="AAHKV2X7AFYLW";a.BR="A2Q3Y263D00KWC";a.MX="A1AM78C64UM0Y8";a.AU="A39IBJ37TRP1C6";a.RU="AD2EMQ3L3PG8S";a.NL="A1805IZSGTT6HS";a.AE="A2VIGQ35RCS4UG";a.SA="A17E79C6D8DWNP";a.TR="A33AVAJ2PDY3EV";a.SG="A19VAU5U5O7RUS";a.PL="A1C3SOZRARQ6R3";
a.SE="A2NODRKZP88ZB9";a.BE="AMEN7PMS3EDWL";a.CO="A1ZXRLSQW2V54D";a.CL="A2WDZJZ5TCRMLH";a.NG="A3OCL2LJ6GDH9T";a.ZA="AE08WJ6YKNBMC";a.IE="A28R8C7NBKEWEA"})(P||(P={}));var D=T.setup(),K,ca,Q,da,E,za=function(){if(void 0===E){var a=F["default"].cardRoot.getElementsByClassName("_tell-amazon-desktop_style_tell_amazon_modal_content__2YB_6")[0],c=F["default"].cardRoot.getElementsByClassName("_tell-amazon-desktop_style_tell_amazon_modal_spinner__3bz5K")[0];E=ia["default"].create("tellAmazon-modal","._tell-amazon-desktop_style_tell_amazon_modal_root__1q10s.aok-hidden",
{a11yOpenMessage:K.reportAnIssue,header:K.reportAnIssue});E.on("beforeShow",function(){return b.__awaiter(void 0,void 0,void 0,function(){return b.__generator(this,function(h){switch(h.label){case 0:return[4,ya(E,a)];case 1:return[2,h.sent()]}})})});E.on("afterHide",function(){return b.__awaiter(void 0,void 0,void 0,function(){return b.__generator(this,function(h){a.innerHTML="";a.appendChild(c);return[2]})})})}},ya=function(a,c){return b.__awaiter(void 0,void 0,void 0,function(){var h,e,d,g;return b.__generator(this,
function(f){switch(f.label){case 0:return h=F["default"].cardRoot.getElementsByClassName("_tell-amazon-desktop_style_tell_amazon_div__1YDZk")[0],e=""+h.dataset.loggedIn,d=""+h.dataset.asin,"true"!==e?[3,6]:[4,D.checkIfUserHasEmail({})];case 1:return g=f.sent(),Q=g.emailAssociated?g.emailAssociated:"",""!==Q?[3,3]:[4,Aa(a,c,d)];case 2:return f.sent(),[3,5];case 3:return[4,Ba(a,c,d)];case 4:f.sent(),f.label=5;case 5:return[3,8];case 6:return[4,Ca(a,c,d)];case 7:f.sent(),f.label=8;case 8:return[2]}})})},
Aa=function(a,c,h){return b.__awaiter(void 0,void 0,void 0,function(){var e;return b.__generator(this,function(d){switch(d.label){case 0:return[4,D.fetchCustomerNoEmailModalContent({asin:h})];case 1:return e=d.sent(),[4,a.render(function(g){return b.__awaiter(void 0,void 0,void 0,function(){return b.__generator(this,function(f){c&&(c.innerHTML="",c.append(e));return[2]})})})];case 2:return d.sent(),[2]}})})},Ca=function(a,c,h){return b.__awaiter(void 0,void 0,void 0,function(){var e;return b.__generator(this,
function(d){switch(d.label){case 0:return[4,D.fetchCustomerNotLoggedModalContent({asin:h})];case 1:return e=d.sent(),[4,a.render(function(g){return b.__awaiter(void 0,void 0,void 0,function(){return b.__generator(this,function(f){c&&(c.innerHTML="",c.append(e));return[2]})})})];case 2:return d.sent(),[2]}})})},Ba=function(a,c,h){return b.__awaiter(void 0,void 0,void 0,function(){var e;return b.__generator(this,function(d){switch(d.label){case 0:return[4,D.fetchTellAmazonModalContent({})];case 1:return e=
d.sent(),[4,a.render(function(g){return b.__awaiter(void 0,void 0,void 0,function(){return b.__generator(this,function(f){switch(f.label){case 0:if(!c)return[3,2];c.innerHTML="";c.append(e);return[4,ra(g,ca,K,"DESKTOP",Q,h,da)];case 1:f.sent(),f.label=2;case 2:return[2]}})})})];case 2:return d.sent(),[2]}})})};R._operationNames="getStrings getTreatment checkIfUserHasEmail sendDefectToNoreaster fetchTellAmazonModalContent fetchCustomerNoEmailModalContent fetchCustomerNotLoggedModalContent".split(" ");
R.card=function(){return b.__awaiter(void 0,void 0,void 0,function(){var a,c;return b.__generator(this,function(h){if(a=F["default"].cardRoot.getElementsByClassName("_tell-amazon-desktop_style_tell_amazon_link__1KW5z")[0])c=S.setup(),c.define(B.openTellAmazonModal,"click",function(){return b.__awaiter(void 0,void 0,void 0,function(){var e,d;return b.__generator(this,function(g){switch(g.label){case 0:return e=F["default"].cardRoot.getElementsByClassName("_tell-amazon-desktop_style_tell_amazon_div__1YDZk")[0],
d=""+e.dataset.marketplace,[4,D.getStrings({})];case 1:return K=g.sent(),[4,D.getTreatment({})];case 2:return da=g.sent(),za(),ca=d===P.US?ka:la,[4,E.show()];case 3:return g.sent(),[2]}})})}),c.attach(B.openTellAmazonModal,a);return[2]})})}});