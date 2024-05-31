"use strict";(self.webpackChunkLexAdvisor=self.webpackChunkLexAdvisor||[]).push([[380],{9380:(G,k,c)=>{c.d(k,{_r:()=>V});var m=c(2532),f=c(2994),_=c(8491),d=c(2658),T=c(6733),n=c(755),S=c(5262),v=c(8748),R=c(3562),M=c(1209),D=c(5667),x=c(3843);function E(s,r){}class g{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}}let I=(()=>{class s extends d.en{constructor(t,e,i,o,l,a,u,C){super(),this._elementRef=t,this._focusTrapFactory=e,this._config=o,this._interactivityChecker=l,this._ngZone=a,this._overlayRef=u,this._focusMonitor=C,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this._ariaLabelledByQueue=[],this.attachDomPortal=B=>{this._portalOutlet.hasAttached();const A=this._portalOutlet.attachDomPortal(B);return this._contentAttached(),A},this._document=i,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();const e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();const e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const i=()=>{t.removeEventListener("blur",i),t.removeEventListener("mousedown",i),t.removeAttribute("tabindex")};t.addEventListener("blur",i),t.addEventListener("mousedown",i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_trapFocus(){const t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(e=>{e||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const t=this._config.restoreFocus;let e=null;if("string"==typeof t?e=this._document.querySelector(t):"boolean"==typeof t?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&"function"==typeof e.focus){const i=(0,_.ht)(),o=this._elementRef.nativeElement;(!i||i===this._document.body||i===o||o.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const t=this._elementRef.nativeElement,e=(0,_.ht)();return t===e||t.contains(e)}_initializeFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,_.ht)())}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}static#t=this.\u0275fac=function(e){return new(e||s)(n.Y36(n.SBq),n.Y36(m.qV),n.Y36(T.K0,8),n.Y36(g),n.Y36(m.ic),n.Y36(n.R0b),n.Y36(f.Iu),n.Y36(m.tE))};static#e=this.\u0275cmp=n.Xpm({type:s,selectors:[["cdk-dialog-container"]],viewQuery:function(e,i){if(1&e&&n.Gf(d.Pl,7),2&e){let o;n.iGM(o=n.CRH())&&(i._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,i){2&e&&n.uIk("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[n.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,i){1&e&&n.YNc(0,E,0,0,"ng-template",0)},dependencies:[d.Pl],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2})}return s})();class b{constructor(r,t){this.overlayRef=r,this.config=t,this.closed=new v.x,this.disableClose=t.disableClose,this.backdropClick=r.backdropClick(),this.keydownEvents=r.keydownEvents(),this.outsidePointerEvents=r.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===S.hY&&!this.disableClose&&!(0,S.Vb)(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=r.detachments().subscribe(()=>{!1!==t.closeOnOverlayDetachments&&this.close()})}close(r,t){if(this.containerInstance){const e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(r),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(r="",t=""){return this.overlayRef.updateSize({width:r,height:t}),this}addPanelClass(r){return this.overlayRef.addPanelClass(r),this}removePanelClass(r){return this.overlayRef.removePanelClass(r),this}}const O=new n.OlP("DialogScrollStrategy"),L=new n.OlP("DialogData"),F=new n.OlP("DefaultDialogConfig"),j={provide:O,deps:[f.aV],useFactory:function w(s){return()=>s.scrollStrategies.block()}};let P=0,H=(()=>{class s{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(t,e,i,o,l,a){this._overlay=t,this._injector=e,this._defaultOptions=i,this._parentDialog=o,this._overlayContainer=l,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new v.x,this._afterOpenedAtThisLevel=new v.x,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,R.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,x.O)(void 0))),this._scrollStrategy=a}open(t,e){(e={...this._defaultOptions||new g,...e}).id=e.id||"cdk-dialog-"+P++,e.id&&this.getDialogById(e.id);const o=this._getOverlayConfig(e),l=this._overlay.create(o),a=new b(l,e),u=this._attachContainer(l,a,e);return a.containerInstance=u,this._attachDialogContent(t,a,u,e),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(a),a.closed.subscribe(()=>this._removeOpenDialog(a,!0)),this.afterOpened.next(a),a}closeAll(){y(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){y(this._openDialogsAtThisLevel,t=>{!1===t.config.closeOnDestroy&&this._removeOpenDialog(t,!1)}),y(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){const e=new f.X_({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,i){const o=i.injector||i.viewContainerRef?.injector,l=[{provide:g,useValue:i},{provide:b,useValue:e},{provide:f.Iu,useValue:t}];let a;i.container?"function"==typeof i.container?a=i.container:(a=i.container.type,l.push(...i.container.providers(i))):a=I;const u=new d.C5(a,i.viewContainerRef,n.zs3.create({parent:o||this._injector,providers:l}),i.componentFactoryResolver);return t.attach(u).instance}_attachDialogContent(t,e,i,o){if(t instanceof n.Rgc){const l=this._createInjector(o,e,i,void 0);let a={$implicit:o.data,dialogRef:e};o.templateContext&&(a={...a,..."function"==typeof o.templateContext?o.templateContext():o.templateContext}),i.attachTemplatePortal(new d.UE(t,null,a,l))}else{const l=this._createInjector(o,e,i,this._injector),a=i.attachComponentPortal(new d.C5(t,o.viewContainerRef,l,o.componentFactoryResolver));e.componentRef=a,e.componentInstance=a.instance}}_createInjector(t,e,i,o){const l=t.injector||t.viewContainerRef?.injector,a=[{provide:L,useValue:t.data},{provide:b,useValue:e}];return t.providers&&("function"==typeof t.providers?a.push(...t.providers(e,t,i)):a.push(...t.providers)),t.direction&&(!l||!l.get(D.Is,null,{optional:!0}))&&a.push({provide:D.Is,useValue:{value:t.direction,change:(0,M.of)()}}),n.zs3.create({parent:l||o,providers:a})}_removeOpenDialog(t,e){const i=this.openDialogs.indexOf(t);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,l)=>{o?l.setAttribute("aria-hidden",o):l.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const e=t.parentElement.children;for(let i=e.length-1;i>-1;i--){const o=e[i];o!==t&&"SCRIPT"!==o.nodeName&&"STYLE"!==o.nodeName&&!o.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static#t=this.\u0275fac=function(e){return new(e||s)(n.LFG(f.aV),n.LFG(n.zs3),n.LFG(F,8),n.LFG(s,12),n.LFG(f.Xj),n.LFG(O))};static#e=this.\u0275prov=n.Yz7({token:s,factory:s.\u0275fac})}return s})();function y(s,r){let t=s.length;for(;t--;)r(s[t])}let N=(()=>{class s{static#t=this.\u0275fac=function(e){return new(e||s)};static#e=this.\u0275mod=n.oAB({type:s});static#i=this.\u0275inj=n.cJS({providers:[H,j],imports:[f.U8,d.eL,m.rt,d.eL]})}return s})();var p=c(4220);c(2405);let V=(()=>{class s{static#t=this.\u0275fac=function(e){return new(e||s)};static#e=this.\u0275mod=n.oAB({type:s});static#i=this.\u0275inj=n.cJS({imports:[N,p.BQ,d.eL,p.BQ]})}return s})()}}]);