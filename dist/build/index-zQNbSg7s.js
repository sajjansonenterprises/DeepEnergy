import{gL as U,hu as ce,bL as ge,h4 as l,ah as me,r as v,u as ue,W as h,F as pe}from"./strapi-Cdgn8T7P.js";import{P as d}from"./index-CkV6IEfc.js";import{c as be,C as he}from"./index-D0h_mqiz.js";const fe=U`
  .ck-word-count {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    padding-block: 0.2rem;
    font-size: 1.4rem;
  }

  .ck-editor__main {
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }

    h1 {
      font-size: 3.2rem;
      margin-bottom: 0.6em;
      font-weight: 400;
    }

    h2 {
      font-size: 2.688rem;
      margin-bottom: 0.4em;
      font-weight: 400;
    }

    h3 {
      font-size: 2.176rem;
      margin-bottom: 0.2em;
      font-weight: 400;
    }

    h4 {
      font-size: 1.84rem;
      margin-bottom: 0.1em;
      font-weight: 400;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.6em;
      margin-bottom: 0.8em;
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 1.2rem;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    .image figcaption {
      font-size: 1.2rem;
    }

    blockquote {
    }

    .table {
      font-size: 1.6rem;
    }

    code {
      font-size: 1.4rem;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      font-size: 1.6rem;
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub
    }

    sup {
      vertical-align: super
    }

    // higher specificity needed
    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;

      // so it's more Strapi alike
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid rgb(73, 69, 255);
        box-shadow: rgb(73 69 255) 0 0 0 0.125rem;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        transition-property: border-color, box-shadow;
        transition-duration: 0.2s;
      }
    }
  }
`,ke=U`
`,Ce=U`
  .ck {
    --ck-color-toolbar-background: rgb(24, 24, 38);
    --ck-color-text: rgb(165, 165, 186);
    --ck-color-editor-base-text: rgb(255, 255, 255);
    --ck-color-toolbar-border: rgb(74, 74, 106);
    --ck-color-base-border: rgb(74, 74, 106);
    --ck-color-base-background: rgb(33, 33, 52);
    --ck-color-button-default-background: rgb(33, 33, 52);
    --ck-color-list-button-hover-background: rgb(24, 24, 38);
    --ck-color-button-default-hover-background: rgb(33, 33, 52);
    --ck-color-button-on-background: rgb(33, 33, 52);
    --ck-color-button-on-hover-background: rgb(33, 33, 52);
    --ck-color-button-default-active-background: rgb(33, 33, 52);
  }
  .ck-word-count {
    color: rgb(165, 165, 186)
  }
`,ve=o=>{let e=null;switch(o){case"dark":e=Ce;break;case"light":e=ke;break}return ce`
    ${fe}
    ${e}
  `},{Plugin:De}=window.CKEDITOR,{ButtonView:xe}=window.CKEDITOR,we='<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.3.6a.9.9 0 100 1.8h15.311a.9.9 0 100-1.8H4.301zm17.1 3.7A1.6 1.6 0 0123 5.9v15.5a1.6 1.6 0 01-1.6 1.6H2.6A1.601 1.601 0 011 21.4V8 5.915C1 5.03 1.716 4.3 2.6 4.3h18.8zM5.032 19.18h14.336l-3.136-3.205-1.792 1.831-4.032-4.12-5.376 5.494zm13.44-8.697c0 1.282-.985 2.289-2.24 2.289-1.254 0-2.24-1.007-2.24-2.29 0-1.281.986-2.288 2.24-2.288 1.255 0 2.24 1.007 2.24 2.289z"></path></svg>';class D extends De{strapiToggle=null;static get pluginName(){return"strapiMediaLib"}init(){this.editor.ui.componentFactory.add("strapiMediaLib",()=>{const t=new xe;return t.set({label:"Media Library",icon:we,tooltip:!0}),t.on("execute",this.toggle.bind(this)),t})}connect(e){if(typeof e!="function")throw new Error("Input parameter for toogle should be a function");this.strapiToggle=e}toggle(){if(typeof this.strapiToggle!="function")throw new Error("Strapi media library toggle function not connected. Use connect function first");this.strapiToggle()}}const Ee="1.1.0",x=be("strapi",{version:Ee}),{Plugin:ye}=window.CKEDITOR;class Ie extends ye{static get pluginName(){return"MaximumLength"}static get requires(){return["WordCount"]}init(){const e=this.editor,t=e.plugins.get("WordCount"),i=e.config.get("maximumLength.characters");let n=!1;e.model.document.registerPostFixer(c=>{const r=t.characters,a=this._calculateExcessRange(i,r);a?n?c.updateMarker("maximumLengthExcess",{range:a,usingOperation:!1}):(c.addMarker("maximumLengthExcess",{range:a,usingOperation:!1}),n=!0):n&&(c.removeMarker("maximumLengthExcess"),n=!1)}),e.conversion.for("editingDowncast").markerToHighlight({model:"maximumLengthExcess",view:{classes:"ck-maximum-length-excess"}})}_calculateExcessRange(e,t){if(e>t)return null;const i=this.editor,c=i.model.createRangeIn(i.model.document.getRoot()).getWalker({singleCharacters:!0,direction:"backward"});let r=t,a,s;for(const u of c)if(u.type=="text"&&(a||(a=u.previousPosition),r--,r<e))return s=u.previousPosition,i.model.createRange(s,a)}}const{Alignment:Te,Autoformat:w,Bold:E,Italic:y,Underline:Se,Strikethrough:Le,Code:He,Subscript:Ne,Superscript:_e,BlockQuote:q,CodeBlock:Q,Essentials:I,FontSize:Re,FontFamily:ze,FontColor:Pe,FontBackgroundColor:Me,FindAndReplace:je,Heading:T,HorizontalLine:Fe,HtmlEmbed:Ae,Image:S,ImageCaption:L,ImageStyle:H,ImageToolbar:N,ImageUpload:_,ImageResize:We,Indent:R,IndentBlock:Ke,Link:z,LinkImage:J,List:P,ListProperties:Oe,TodoList:Ve,Markdown:Ue,MediaEmbed:X,Paragraph:M,PasteFromOffice:j,RemoveFormat:Be,SpecialCharacters:$e,SpecialCharactersEssentials:Ge,Table:F,TableToolbar:A,TableProperties:qe,TableCellProperties:Qe,TableColumnResize:W,TableCaption:K,WordCount:O,Highlight:Je}=window.CKEDITOR,V={light:{plugins:[w,E,y,I,T,S,L,H,N,_,R,z,P,M,j,F,A,W,K,O,D,x],toolbar:["undo","redo","|","heading","|","bold","italic","|","link","strapiMediaLib","insertTable","|","bulletedList","numberedList"],heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"}]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:side","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","|","toggleTableCaption"]},link:{decorators:{openInNewTab:{mode:"manual",label:"Open in a new tab",attributes:{target:"_blank",rel:"noopener noreferrer"}}}}},standard:{plugins:[w,E,y,q,Q,I,T,S,L,H,N,_,R,z,J,P,X,M,j,F,A,W,K,O,D,x],toolbar:["undo","redo","|","heading","|","bold","italic","|","link","strapiMediaLib","mediaEmbed","blockQuote","insertTable","codeBlock","|","bulletedList","numberedList","outdent","indent"],heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"}]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:side","|","toggleImageCaption","imageTextAlternative","|","linkImage"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","|","toggleTableCaption"]},link:{decorators:{openInNewTab:{mode:"manual",label:"Open in a new tab",attributes:{target:"_blank",rel:"noopener noreferrer"}}}}},rich:{plugins:[Te,w,E,y,Se,Le,He,Ne,_e,q,Q,I,Re,ze,Pe,Me,je,T,Fe,Ae,S,L,H,N,_,We,R,Ke,z,J,P,Oe,Ve,X,M,j,Be,$e,Ge,F,A,qe,Qe,W,K,O,Je,D,x],toolbar:{items:["undo","redo","|","findAndReplace","selectAll","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","superscript","subscript","code","removeFormat","-","link","strapiMediaLib","mediaEmbed","insertTable","horizontalLine","blockQuote","codeBlock","htmlEmbed","specialCharacters","highlight","|","alignment","|","bulletedList","numberedList","todoList","outdent","indent"],shouldNotGroupWhenFull:!0},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"}]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},image:{resizeUnit:"%",resizeOptions:[{name:"resizeImage:original",value:null,icon:"original"},{name:"resizeImage:25",value:"25",icon:"small"},{name:"resizeImage:50",value:"50",icon:"medium"},{name:"resizeImage:75",value:"75",icon:"large"}],toolbar:["imageStyle:inline","imageStyle:block","imageStyle:side","|","toggleImageCaption","imageTextAlternative","|","linkImage","|","resizeImage:25","resizeImage:50","resizeImage:75","resizeImage:original"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","|","tableCellProperties","tableProperties","|","toggleTableCaption"]},fontSize:{options:[9,11,13,"default",17,19,21,27,35],supportAllValues:!1},fontFamily:{options:["default","Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif","Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif"],supportAllValues:!0},fontColor:{columns:5,documentColors:10},fontBackgroundColor:{columns:5,documentColors:10},link:{decorators:{openInNewTab:{mode:"manual",label:"Open in a new tab",attributes:{target:"_blank",rel:"noopener noreferrer"}}}}}};class Xe{constructor(e){this.fieldConfig=e}getEditorConfig(){const e=this._getBaseConfig(),t=this.fieldConfig.maxLength,i=this.fieldConfig.options.output,n=this.fieldConfig.licenseKey;return e.licenseKey=n,i==="Markdown"&&e.plugins.push(Ue),t&&(e.plugins.push(Ie),e.maximumLength={characters:t}),e}_getBaseConfig(){const e=this.fieldConfig.options.preset;switch(e){case"light":return V.light;case"standard":return V.standard;case"rich":return V.rich;default:throw new Error("Invalid preset name "+e)}}}function Ye(o){return o&&o.startsWith("/")?`${window.strapi.backendURL}${o}`:o}const Z=({isOpen:o=!1,onChange:e=()=>{},onToggle:t=()=>{}})=>{const{components:i}=ge("library",r=>r),n=i["media-library"],c=r=>{const a=r.map(s=>({alt:s.alternativeText||s.name,url:Ye(s.url),mime:s.mime}));e(a)};return o?l.jsxDEV(n,{onClose:t,onSelectAssets:c},void 0,!1,{fileName:"C:/Users/Dell/Desktop/C Drive Data/HSWD-Harsh/Deep Energy/server/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/MediaLib/index.jsx",lineNumber:25,columnNumber:5},void 0):null};Z.propTypes={isOpen:d.bool,onChange:d.func,onToggle:d.func};function Y(o){const e={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"};for(const t in e){const i=e[t];o=o.replaceAll(t,i)}return o}const{ClassicEditor:Ze}=window.CKEDITOR,et=localStorage.getItem("STRAPI_THEME")||"light",tt=ve(et),ot=o=>{const{attribute:e,name:t,disabled:i,labelAction:n,required:c,description:r,error:a,intlLabel:s}=o,{onChange:u,value:ee}=me(t),[f,te]=v.useState(!1),{formatMessage:B}=ue(),{maxLengthCharacters:$,licenseKey:oe,...ie}=e.options,ne=new Xe({options:ie,maxLength:$,licenseKey:oe}).getEditorConfig(),G=v.useRef(null),[re,ae]=v.useState(!1),k=()=>ae(g=>!g),se=g=>{let m="";g.map(b=>{if(b.mime.includes("image")){const le=Y(b.url),de=Y(b.alt);m+=`<img src="${le}" alt="${de}" />`}});const p=f.data.processor.toView(m),C=f.data.toModel(p);f.model.insertContent(C),k()};return l.jsxDEV(h.Root,{name:t,id:t,error:a,hint:r&&B(r),children:[l.jsxDEV(pe,{spacing:1,alignItems:"normal",style:{flexDirection:"column"},children:[l.jsxDEV(h.Label,{action:n,required:c,children:s?B(s):t},void 0,!1,{fileName:"C:/Users/Dell/Desktop/C Drive Data/HSWD-Harsh/Deep Energy/server/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:72,columnNumber:9},void 0),l.jsxDEV(tt,{},void 0,!1,{fileName:"C:/Users/Dell/Desktop/C Drive Data/HSWD-Harsh/Deep Energy/server/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:75,columnNumber:9},void 0),l.jsxDEV(he,{editor:Ze,disabled:i,data:ee??"",onReady:g=>{const m=g.plugins.get("WordCount");G.current.appendChild(m.wordCountContainer),g.plugins.get("strapiMediaLib").connect(k),te(g)},onChange:(g,m)=>{const p=m.getData();u({target:{name:t,value:p}}),m.plugins.get("WordCount").characters>$&&console.log("Too long")},config:ne},void 0,!1,{fileName:"C:/Users/Dell/Desktop/C Drive Data/HSWD-Harsh/Deep Energy/server/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:76,columnNumber:9},void 0),l.jsxDEV("div",{ref:G},void 0,!1,{fileName:"C:/Users/Dell/Desktop/C Drive Data/HSWD-Harsh/Deep Energy/server/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:103,columnNumber:9},void 0),l.jsxDEV(h.Hint,{},void 0,!1,{fileName:"C:/Users/Dell/Desktop/C Drive Data/HSWD-Harsh/Deep Energy/server/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:104,columnNumber:9},void 0),l.jsxDEV(h.Error,{},void 0,!1,{fileName:"C:/Users/Dell/Desktop/C Drive Data/HSWD-Harsh/Deep Energy/server/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:105,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/Dell/Desktop/C Drive Data/HSWD-Harsh/Deep Energy/server/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:71,columnNumber:7},void 0),l.jsxDEV(Z,{isOpen:re,onChange:se,onToggle:k},void 0,!1,{fileName:"C:/Users/Dell/Desktop/C Drive Data/HSWD-Harsh/Deep Energy/server/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:107,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/Dell/Desktop/C Drive Data/HSWD-Harsh/Deep Energy/server/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:64,columnNumber:5},void 0)};ot.propTypes={attribute:d.object.isRequired,name:d.string.isRequired,description:d.object,disabled:d.bool,error:d.string,labelAction:d.object,required:d.bool};export{ot as CKEditorInput};
