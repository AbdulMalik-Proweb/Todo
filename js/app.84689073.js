(function(){"use strict";var t={3701:function(t,e,n){var a=n(9242),i=n(3396);const o={class:"wrapper"},r={class:"container"};function l(t,e,n,a,l,s){const d=(0,i.up)("Navbar"),c=(0,i.up)("AddCard"),g=(0,i.up)("GridOrList"),h=(0,i.up)("Card"),u=(0,i.up)("AddBtn");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(d,{lang:l.lang,langWords:l.langWords,onChangeLang:s.changeLang,onGetSearch:e[0]||(e[0]=t=>l.searching=t)},null,8,["lang","langWords","onChangeLang"]),l.modalOpen?((0,i.wg)(),(0,i.j4)(c,{key:0,onCloseModal:s.closeModal,onAddNote:s.addNote,lang:l.lang,langWords:l.langWords,note:l.note,edit:l.edit,editObj:l.editObj,onEditNote:s.editNote},null,8,["onCloseModal","onAddNote","lang","langWords","note","edit","editObj","onEditNote"])):(0,i.kq)("",!0),(0,i._)("div",r,[(0,i.Wm)(g,{lang:l.lang,langWords:l.langWords,gridOrList:l.gridOrList,onChangeList:e[1]||(e[1]=t=>l.gridOrList=t)},null,8,["lang","langWords","gridOrList"]),(0,i.Wm)(h,{lang:l.lang,langWords:l.langWords,notes:s.filterNotes,grid:l.gridOrList,onDelNote:s.delNote,onChangeNote:s.changeNote},null,8,["lang","langWords","notes","grid","onDelNote","onChangeNote"])]),(0,i.Wm)(u,{onModalOpen:e[2]||(e[2]=t=>l.modalOpen=!0)})])}n(7658);const s={appbartitle:{ru:"Заметки",uz:"Eslatmalar"},appbarsearch:{ru:"Поиск...",uz:"Qidirish..."},infobartitle:{ru:"Все заметки",uz:"Barcha eslatmalar"},infobarlist:{ru:"Список",uz:"Roʻyxat"},infobargrid:{ru:"Сетка",uz:"Setka"},cardEdit:{ru:"Изменить",uz:"o'zgartirish"},cardDelet:{ru:"Удалить",uz:"o'chirish"},addTitle:{ru:"Добавить заметку",uz:"Eslatma qo’shish"},editTitle:{ru:"Изменить Заметку",uz:"Eslatmani o'zgartirish"},labelTitle:{ru:"Заголовок",uz:"Sarlovxa"},labelContent:{ru:"Текст",uz:"Matn"},btnAdd:{ru:"Добавить",uz:"Qo'shish"},btnRemove:{ru:"Отменить",uz:"Bekor qilish"},btnEdit:{ru:"Изменить",uz:"O'zgartirish"}};var d=s,c=n(7139),g=n.p+"img/search.2c9e71ed.svg",h=n.p+"img/back.014b4ff1.svg",u=n.p+"img/cancel.1d4d165f.svg";const p={class:"header"},b={key:0,class:"header__search"},f={class:"header__title"},m=(0,i._)("img",{src:g,alt:""},null,-1),_=[m],v={key:1,class:"header__search"},w=(0,i._)("img",{src:h,alt:""},null,-1),O=[w],k=["placeholder"],W=(0,i._)("img",{src:u,alt:""},null,-1),z=[W];function C(t,e,n,o,r,l){return(0,i.wg)(),(0,i.iD)("header",p,[(0,i.Wm)(a.uT,{name:"header__search",mode:"out-in"},{default:(0,i.w5)((()=>[r.header?((0,i.wg)(),(0,i.iD)("div",b,["uz"==n.lang?((0,i.wg)(),(0,i.iD)("button",{key:0,class:"header__lang",onClick:e[0]||(e[0]=(...t)=>l.changeLang&&l.changeLang(...t))}," РУ ")):((0,i.wg)(),(0,i.iD)("button",{key:1,class:"header__lang",onClick:e[1]||(e[1]=(...t)=>l.changeLang&&l.changeLang(...t))},"UZ")),(0,i._)("h1",f,(0,c.zw)(n.langWords.appbartitle[n.lang]),1),(0,i._)("button",{class:"header__search",onClick:e[2]||(e[2]=t=>r.header=!1)},_)])):((0,i.wg)(),(0,i.iD)("form",v,[(0,i._)("a",{href:"#!",class:"back",onClick:e[3]||(e[3]=(0,a.iM)((t=>r.header=!0),["prevent"]))},O),(0,i.wy)((0,i._)("input",{type:"text",placeholder:n.langWords.appbarsearch[n.lang],"onUpdate:modelValue":e[4]||(e[4]=t=>r.search=t),class:"header__input"},null,8,k),[[a.nr,r.search]]),(0,i._)("a",{href:"#!",class:"header__close",onClick:e[5]||(e[5]=(0,a.iM)((t=>r.search=""),["prevent"]))},z)]))])),_:1})])}var N={props:{lang:String,langWords:Object},data(){return{header:!0,search:""}},methods:{changeLang(){this.$emit("changeLang","uz"==this.lang?"ru":"uz")}},watch:{search(t){this.$emit("getSearch",t)}}},y=n(89);const L=(0,y.Z)(N,[["render",C]]);var D=L,j=n.p+"img/list.4ed3d4be.svg",S=n.p+"img/grid.dbae4039.svg";const x={class:"setting"},E={class:"setting__title"},M={key:0,src:j,alt:""},T={key:1,src:S,alt:""},A={key:2},$={key:3};function B(t,e,n,a,o,r){return(0,i.wg)(),(0,i.iD)("div",x,[(0,i._)("h3",E,(0,c.zw)(n.langWords.infobartitle[n.lang]),1),(0,i._)("button",{class:"setting__button",onClick:e[0]||(e[0]=(...t)=>r.changeList&&r.changeList(...t))},[n.gridOrList?((0,i.wg)(),(0,i.iD)("img",M)):((0,i.wg)(),(0,i.iD)("img",T)),n.gridOrList?((0,i.wg)(),(0,i.iD)("span",A,(0,c.zw)(n.langWords.infobarlist[n.lang]),1)):((0,i.wg)(),(0,i.iD)("span",$,(0,c.zw)(n.langWords.infobargrid[n.lang]),1))])])}var Z={props:{lang:String,langWords:Object,gridOrList:{typeof:Boolean,default:!0}},methods:{changeList(){this.$emit("changeList",!this.gridOrList)}}};const U=(0,y.Z)(Z,[["render",B]]);var J=U,q=n.p+"img/edit.092f5b23.svg",G=n.p+"img/delete.f04c87ff.svg";const I={class:"card__titel"},R={class:"card__time"},V={class:"card__text"},P={class:"card__btns"},Q=["onClick"],F=(0,i._)("img",{src:q,alt:""},null,-1),H=["onClick"],K=(0,i._)("img",{src:G,alt:""},null,-1);function Y(t,e,n,a,o,r){return(0,i.wg)(),(0,i.iD)("div",{class:(0,c.C_)(["notes",{grid:n.grid,list:!n.grid}])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.notes,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"card",key:e.id},[(0,i._)("h3",I,(0,c.zw)(e.title),1),(0,i._)("p",R,(0,c.zw)(e.time),1),(0,i._)("p",V,(0,c.zw)(e.content),1),(0,i._)("div",P,[(0,i._)("button",{class:"btn",onClick:n=>t.$emit("changeNote",e.id)},[F,(0,i._)("span",null,(0,c.zw)(n.langWords.cardEdit[n.lang]),1)],8,Q),(0,i._)("button",{class:"btn",onClick:n=>t.$emit("delNote",e.id)},[K,(0,i._)("span",null,(0,c.zw)(n.langWords.cardDelet[n.lang]),1)],8,H)])])))),128))],2)}var X={props:{lang:String,langWords:Object,grid:Boolean,notes:Array}};const tt=(0,y.Z)(X,[["render",Y]]);var et=tt;const nt=(0,i._)("img",{src:q,alt:""},null,-1),at=[nt];function it(t,e,n,a,o,r){return(0,i.wg)(),(0,i.iD)("button",{class:"wrapper__btn",onClick:e[0]||(e[0]=(...t)=>r.modalOpen&&r.modalOpen(...t))},at)}var ot={methods:{modalOpen(){this.$emit("modalOpen",!0)}}};const rt=(0,y.Z)(ot,[["render",it]]);var lt=rt;const st={class:"add"},dt={class:"add-note"},ct={key:0,class:"add-note__title"},gt={key:1,class:"add-note__title"},ht={class:"add-note__label"},ut=["placeholder"],pt={class:"add-note__label"},bt=["placeholder"],ft={class:"add-note__btns"};function mt(t,e,n,o,r,l){return(0,i.wg)(),(0,i.iD)("div",st,[(0,i._)("div",dt,[n.edit?((0,i.wg)(),(0,i.iD)("h3",gt,(0,c.zw)(n.langWords.editTitle[n.lang]),1)):((0,i.wg)(),(0,i.iD)("h3",ct,(0,c.zw)(n.langWords.addTitle[n.lang]),1)),(0,i._)("label",ht,[(0,i.Uk)((0,c.zw)(n.langWords.labelTitle[n.lang])+" ",1),(0,i.wy)((0,i._)("input",{type:"text",placeholder:n.langWords.labelTitle[n.lang],"onUpdate:modelValue":e[0]||(e[0]=t=>n.note.title=t)},null,8,ut),[[a.nr,n.note.title]])]),(0,i._)("label",pt,[(0,i.Uk)((0,c.zw)(n.langWords.labelContent[n.lang])+" ",1),(0,i.wy)((0,i._)("input",{type:"text",placeholder:n.langWords.labelContent[n.lang],"onUpdate:modelValue":e[1]||(e[1]=t=>n.note.content=t)},null,8,bt),[[a.nr,n.note.content]])]),(0,i._)("div",ft,[(0,i._)("button",{onClick:e[2]||(e[2]=(...t)=>l.remove&&l.remove(...t))},(0,c.zw)(n.langWords.btnRemove[n.lang]),1),n.edit?((0,i.wg)(),(0,i.iD)("button",{key:1,onClick:e[4]||(e[4]=(...t)=>l.changeNote&&l.changeNote(...t))},(0,c.zw)(n.langWords.btnEdit[n.lang]),1)):((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:e[3]||(e[3]=(...t)=>l.addNote&&l.addNote(...t))},(0,c.zw)(n.langWords.btnAdd[n.lang]),1))])])])}var _t={props:{lang:String,langWords:Object,note:Object,edit:Boolean,editObj:Object},data(){return{time:"",title:"",content:""}},methods:{remove(){this.$emit("closeModal",!1)},addNote(){this.$emit("addNote",this.note),this.remove()},changeNote(){if(""!=this.note.title||""!=this.note.content){const t={id:this.editObj.id,title:this.note.title,content:this.note.content,time:(new Date).toLocaleDateString()};this.$emit("editNote",t),this.remove(),this.note.title="",this.note.content=""}}}};const vt=(0,y.Z)(_t,[["render",mt]]);var wt=vt,Ot={components:{Navbar:D,GridOrList:J,Card:et,AddBtn:lt,AddCard:wt},data(){return{lang:"uz",langWords:{},gridOrList:!0,modalOpen:!1,edit:!1,searching:"",editObj:{},idCount:1,note:{title:"",content:""},notes:[]}},computed:{filterNotes(){return this.searching?this.notes.filter((t=>t.title.toLowerCase().includes(this.searching.toLowerCase()))):this.notes}},methods:{changeLang(t){this.lang=localStorage.lang=t},closeModal(t){this.edit=this.modalOpen=t,this.note.title="",this.note.content=""},addNote(){let{id:t,title:e,content:n}=this.note;if(""===e||""===n)return!1;this.notes.push({id:this.idCount++,title:e,time:(new Date).toLocaleDateString(),content:n}),this.note.title="",this.note.content=""},getNotes(){const t=localStorage.notes;t&&(this.notes=JSON.parse(t))},delNote(t){let e=this.notes.findIndex((e=>e.id==t));this.notes.splice(e,1)},changeNote(t){this.edit=this.modalOpen=!0;let e=this.notes.find((e=>e.id==t));this.editObj=e,this.note.title=this.editObj.title,this.note.content=this.editObj.content},editNote(t){this.notes.forEach((e=>{e.id==t.id&&(e.title=t.title,e.content=t.content,e.time=t.time)}))}},watch:{idCount(){localStorage.setItem("id",JSON.stringify(this.idCount))},notes:{handler(t){localStorage.notes=JSON.stringify(this.notes)},deep:!0}},created(){this.getNotes(),this.lang=localStorage.lang||"uz",this.langWords=d;let t=localStorage.getItem("id");t&&(this.idCount=JSON.parse(t))}};const kt=(0,y.Z)(Ot,[["render",l]]);var Wt=kt;const zt=(0,a.ri)(Wt);zt.mount("#app")}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,o){if(!a){var r=1/0;for(c=0;c<t.length;c++){a=t[c][0],i=t[c][1],o=t[c][2];for(var l=!0,s=0;s<a.length;s++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[s])}))?a.splice(s--,1):(l=!1,o<r&&(r=o));if(l){t.splice(c--,1);var d=i();void 0!==d&&(e=d)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[a,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,o,r=a[0],l=a[1],s=a[2],d=0;if(r.some((function(e){return 0!==t[e]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)var c=s(n)}for(e&&e(a);d<r.length;d++)o=r[d],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},a=self["webpackChunktodo"]=self["webpackChunktodo"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(3701)}));a=n.O(a)})();