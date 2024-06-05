import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-Ch3g--7k.js";import{d as a,N as t,e as l,a1 as o,I as r,r as s,Y as i,o as p,c as n,w as u,a as m,$ as d,H as c,t as g,Q as h,l as _,_ as f}from"./index-Dk21xwtr.js";import{_ as j}from"./Search.vue_vue_type_script_setup_true_lang-wV0UCEHD.js";import{u as b}from"./useSearch-BkauB44s.js";import{u as x}from"./useTable-jXLU4IOU.js";import{E as y}from"./el-card-SL_UCAqP.js";import{E as v}from"./el-pagination-CM2qyTG0.js";import"./el-tag-CX3pn8fR.js";import"./el-popper-F_A9qiIe.js";import{E as w,a as H}from"./el-col-DbOQcVQ4.js";import{_ as S,E as k,a as z}from"./Table.vue_vue_type_script_lang-2z1tSha4.js";import"./el-checkbox-D_kjMNFE.js";import"./el-tooltip-l0sNRNKZ.js";import{E as P}from"./el-text-TgXDE8Ei.js";import{E}from"./el-divider-CDcOBH8g.js";import{_ as I}from"./Dialog.vue_vue_type_style_index_0_lang-B0KuT73K.js";import{u as C}from"./useCrudSchemas-BcOt-_CE.js";import{c as R}from"./index-nV74dTpo.js";import"./useForm-3h0Bx9kF.js";import"./el-form-item-R7LQuAdu.js";import"./castArray-iLnkynXB.js";import"./el-radio-group-DFBQg6d6.js";/* empty css                          */import"./el-input-number-BqYSeTcA.js";import"./el-select-v2-BRTN4253.js";import"./raf-p14jZNMx.js";import"./useInput-CkicsvFD.js";import"./debounce-6Yuy_eHi.js";import"./el-switch-BM1_kxRJ.js";import"./el-progress-CUqU0l8H.js";import"./InputPassword-OYOmTSYy.js";import"./style.css_vue_type_style_index_0_src_true_lang-CaNppNwr.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-D3ZVVxeE.js";import"./IconPicker-7sjj-BNc.js";/* empty css                   */import"./el-tab-pane-DI598Wff.js";import"./tsxHelper-DvdsRWdD.js";import"./index-DZKCr3Pz.js";import"./useIcon-CA6tr2US.js";import"./el-image-viewer-CzRXxFju.js";import"./el-dropdown-item-Bb1uXTT0.js";import"./refs-aSJcFwVo.js";import"./index-DtT2P8Cm.js";import"./tree-BfZhwLPs.js";import"./index-CtI1U4Dj.js";const U=f(a({__name:"Crawler",setup(a){const{t:f}=_(),{searchRegister:U}=b(),A=t([{field:"search",label:f("form.input"),component:"Input",formItemProps:{size:"large",style:{width:"100%"}},componentProps:{clearable:!1,slots:{suffix:()=>l(r,{class:"icon-button",onClick:N,text:!0,style:"outline: none;background-color: transparent !important; color: inherit !important; box-shadow: none !important;position: relative;left: 24%"},{default:()=>[l(o,{icon:"tdesign:chat-bubble-help"},null)]})}}}]),L=[{operator:"=",meaning:f("searchHelp.like")},{operator:"!=",meaning:f("searchHelp.notIn")},{operator:"==",meaning:f("searchHelp.equal")},{operator:"&&",meaning:f("searchHelp.and")},{operator:"||",meaning:f("searchHelp.or")},{operator:"()",meaning:f("searchHelp.brackets")}],W=[{keyword:"url",example:'url="http://example.com"',explain:f("searchHelp.url")},{keyword:"method",example:'method="POST"',explain:f("searchHelp.method")},{keyword:"body",example:'body="username=admin"',explain:f("searchHelp.crawlerBody")},{keyword:"project",example:'project="Hackerone"',explain:f("searchHelp.project")}],M=s(!1),N=()=>{M.value=!0},T=s(!0),V=s("inline"),q=s("left"),B=s(""),D=e=>{B.value=e.search,ae()},F=s(!1),Q=t([{field:"index",label:f("tableDemo.index"),type:"index",minWidth:10},{field:"method",label:"Method",minWidth:15},{field:"url",label:"URL",minWidth:60},{field:"body",label:f("crawler.postParameter"),minWidth:60}]),{allSchemas:Y}=C(Q),{tableRegister:G,tableState:J,tableMethods:K}=x({fetchDataApi:async()=>{const{currentPage:e,pageSize:a}=J,t=await R(B.value,e.value,a.value);return{list:t.data.list,total:t.data.total}},immediate:!1}),{loading:O,dataList:X,total:Z,currentPage:$,pageSize:ee}=J,{getList:ae}=K;function te(){return{background:"var(--el-fill-color-light)"}}ee.value=20,i((()=>{oe(),window.addEventListener("resize",oe)}));const le=s(0),oe=()=>{const e=window.innerHeight||document.documentElement.clientHeight;le.value=.7*e};return(a,t)=>(p(),n(h,null,[l(m(e),{style:{height:"80px"}},{default:u((()=>[l(m(j),{schema:A,"is-col":T.value,layout:V.value,"show-reset":!1,"button-position":q.value,"search-loading":F.value,onSearch:D,onReset:D,onRegister:m(U)},null,8,["schema","is-col","layout","button-position","search-loading","onRegister"])])),_:1}),l(m(H),null,{default:u((()=>[l(m(w),null,{default:u((()=>[l(m(y),null,{default:u((()=>[l(m(S),{pageSize:m(ee),"onUpdate:pageSize":t[0]||(t[0]=e=>d(ee)?ee.value=e:null),currentPage:m($),"onUpdate:currentPage":t[1]||(t[1]=e=>d($)?$.value=e:null),columns:m(Y).tableColumns,data:m(X),"max-height":le.value,stripe:"",border:!0,loading:m(O),resizable:!0,onRegister:m(G),headerCellStyle:te,style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","max-height","loading","onRegister"])])),_:1})])),_:1}),l(m(w),{":span":24},{default:u((()=>[l(m(y),null,{default:u((()=>[l(m(v),{pageSize:m(ee),"onUpdate:pageSize":t[2]||(t[2]=e=>d(ee)?ee.value=e:null),currentPage:m($),"onUpdate:currentPage":t[3]||(t[3]=e=>d($)?$.value=e:null),"page-sizes":[20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:m(Z)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1}),l(m(I),{modelValue:M.value,"onUpdate:modelValue":t[4]||(t[4]=e=>M.value=e),title:m(f)("common.querysyntax"),center:"",style:{"border-radius":"15px","box-shadow":"5px 5px 10px rgba(0, 0, 0, 0.3)"}},{default:u((()=>[l(m(H),null,{default:u((()=>[l(m(w),null,{default:u((()=>[l(m(P),{tag:"b",size:"small"},{default:u((()=>[c(g(m(f)("searchHelp.operator")),1)])),_:1}),l(m(E),{direction:"vertical"}),l(m(P),{size:"small",type:"danger"},{default:u((()=>[c(g(m(f)("searchHelp.notice")),1)])),_:1})])),_:1}),l(m(w),{style:{"margin-top":"10px"}},{default:u((()=>[l(m(k),{headerCellStyle:te,data:L},{default:u((()=>[l(m(z),{prop:"operator",label:m(f)("searchHelp.operator"),width:"300"},null,8,["label"]),l(m(z),{prop:"meaning",label:m(f)("searchHelp.meaning")},null,8,["label"])])),_:1})])),_:1}),l(m(w),{style:{"margin-top":"15px"}},{default:u((()=>[l(m(P),{tag:"b",size:"small"},{default:u((()=>[c(g(m(f)("searchHelp.keywords")),1)])),_:1})])),_:1}),l(m(w),{style:{"margin-top":"10px"}},{default:u((()=>[l(m(k),{headerCellStyle:te,data:W},{default:u((()=>[l(m(z),{prop:"keyword",label:m(f)("searchHelp.keywords")},null,8,["label"]),l(m(z),{prop:"example",label:m(f)("searchHelp.example")},null,8,["label"]),l(m(z),{prop:"explain",label:m(f)("searchHelp.explain")},null,8,["label"])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","title"])],64))}}),[["__scopeId","data-v-cce00434"]]);export{U as default};