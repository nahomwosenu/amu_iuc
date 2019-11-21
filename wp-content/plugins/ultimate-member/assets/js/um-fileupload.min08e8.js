!function(S){S.fn.ajaxForm;var C={};C.fileapi=void 0!==S("<input type='file'/>").get(0).files,C.formdata=void 0!==window.FormData,S.fn.uploadFile=function(e){var p=S.extend({url:"",method:"POST",enctype:"multipart/form-data",formData:null,returnType:null,allowedTypes:"*",fileName:"file",formData:{},dynamicFormData:function(){return{}},maxFileSize:-1,maxFileCount:-1,multiple:!0,dragDrop:!0,autoSubmit:!0,showCancel:!0,showAbort:!0,showDone:!0,showDelete:!1,showError:!0,showStatusAfterSuccess:!0,showStatusAfterError:!0,showFileCounter:!0,fileCounterStyle:"). ",showProgress:!1,onSelect:function(e){return!0},onSubmit:function(e,r){},onSuccess:function(e,r,t){},onError:function(e,r,t){},deleteCallback:!1,afterUploadAll:!1,uploadButtonClass:"upload",dragDropStr:"",abortStr:"Abort",cancelStr:"Cancel",deletelStr:"Delete",doneStr:"Done",multiDragErrorStr:"Multiple File Drag &amp; Drop is not allowed.",extErrorStr:"",sizeErrorStr:"",uploadErrorStr:"Upload is not allowed",maxFileCountErrorStr:""},e);this.fileCounter=1,this.selectedFiles=0,this.fCounter=0,this.sCounter=0,this.tCounter=0;var s="upload-"+(new Date).getTime();this.formGroup=s,this.hide(),this.errorLog=S("<div></div>"),this.after(this.errorLog),this.responses=[],C.formdata||(p.dragDrop=!1),C.formdata||(p.multiple=!1);var c=this,i=S("<div>"+S(this).html()+"</div>");S(i).addClass(p.uploadButtonClass),function e(){if(S.fn.ajaxForm){if(p.dragDrop){var r=S('<div class="ajax-upload-dragdrop" style="vertical-align:top;"></div>');S(c).before(r),S(r).append(i),S(r).prepend(S(p.dragDropStr)),t=c,o=p,(a=r).on("dragenter",function(e){e.stopPropagation(),e.preventDefault(),S(this).css("border","2px dashed #ddd")}),a.on("dragover",function(e){e.stopPropagation(),e.preventDefault()}),a.on("drop",function(e){S(this).css("border","2px dashed #ddd"),e.preventDefault(),t.errorLog.html("");var r=e.originalEvent.dataTransfer.files;!o.multiple&&1<r.length?o.showError&&S("<div class='um-error-block'>"+o.multiDragErrorStr+"</div>").appendTo(t.errorLog):0!=o.onSelect(r)&&m(o,t,r)}),S(document).on("dragenter",function(e){e.stopPropagation(),e.preventDefault()}),S(document).on("dragover",function(e){e.stopPropagation(),e.preventDefault(),a.css("border","2px dashed #ddd")}),S(document).on("drop",function(e){e.stopPropagation(),e.preventDefault(),a.css("border","2px dashed #ddd")})}else S(c).before(i);!function l(n,d,u,p){var e="ajax-upload-id-"+(new Date).getTime();var c=S("<form method='"+u.method+"' action='"+u.url+"' enctype='"+u.enctype+"'></form>");var r="<input type='file' id='"+e+"' name='"+u.fileName+"'/>";u.multiple&&(u.fileName.indexOf("[]")!=u.fileName.length-2&&(u.fileName+="[]"),r="<input type='file' id='"+e+"' name='"+u.fileName+"' multiple/>");var t=S(r).appendTo(c);t.change(function(){n.errorLog.html("");u.allowedTypes.toLowerCase().split(",");var e=[];if(this.files){for(s=0;s<this.files.length;s++)e.push(this.files[s].name);if(0==u.onSelect(this.files))return}else{var r=S(this).val(),t=[];if(e.push(r),!v(n,u,r))return void(u.showError&&S("<div class='um-error-block'>"+u.extErrorStr+"</div>").appendTo(n.errorLog));if(t.push({name:r,size:"NA"}),0==u.onSelect(t))return}if(g(u,n),p.unbind("click"),c.hide(),l(n,d,u,p),c.addClass(d),C.fileapi&&C.formdata){c.removeClass(d);var o=this.files;m(u,n,o)}else{for(var a="",s=0;s<e.length;s++)u.showFileCounter?a+=n.fileCounter+u.fileCounterStyle+e[s]+"<br>":a+=e[s]+"<br>",n.fileCounter++;if(-1!=u.maxFileCount&&n.selectedFiles+e.length>u.maxFileCount)return void(u.showError&&S("<div class='um-error-block'>"+u.maxFileCountErrorStr+"</div>").appendTo(n.errorLog));n.selectedFiles+=e.length;var i=new b(n,u);i.filename.html(a),w(c,u,i,e,n)}});c.css({margin:0,padding:0});var o=S(p).width()+10;10==o&&(o=120);var a=p.height()+10;10==a&&(a=35);p.css({position:"relative",overflow:"hidden",cursor:"default"});t.css({position:"absolute",cursor:"pointer",top:"0px",width:"100%",height:"34px",left:"0px","z-index":"100",opacity:"0.0",filter:"alpha(opacity=0)","-ms-filter":"alpha(opacity=0)","-khtml-opacity":"0.0","-moz-opacity":"0.0"});c.appendTo(p)}(c,s,p,i)}else window.setTimeout(e,10);var t,o,a}(),this.startUpload=function(){S("."+this.formGroup).each(function(e,r){S(this).is("form")&&S(this).submit()})},this.stopUpload=function(){S(".upload-red").each(function(e,r){S(this).hasClass(c.formGroup)&&S(this).click()})};var h=!(this.getResponses=function(){return this.responses});function f(e){var r,t,o=[],a=(o="string"==jQuery.type(e)?e.split("&"):S.param(e).split("&")).length,s=[];for(r=0;r<a;r++)o[r]=o[r].replace(/\+/g," "),t=o[r].split("="),s.push([decodeURIComponent(t[0]),decodeURIComponent(t[1])]);return s}function m(e,r,t){for(var o=0;o<t.length;o++)if(v(r,e,t[o].name))if(-1!=e.maxFileSize&&t[o].size>e.maxFileSize)e.showError&&S("<div class='um-error-block'>"+e.sizeErrorStr+"</div>").appendTo(r.errorLog);else if(-1!=e.maxFileCount&&r.selectedFiles>=e.maxFileCount)e.showError&&S("<div class='um-error-block'>"+e.maxFileCountErrorStr+"</div>").appendTo(r.errorLog);else{r.selectedFiles++;var a=e,s=new FormData,i=e.fileName.replace("[]","");s.append(i,t[o]);var l=e.formData;if(l)for(var n=f(l),d=0;d<n.length;d++)n[d]&&s.append(n[d][0],n[d][1]);a.fileData=s;var u=new b(r,e),p="";p=e.showFileCounter?r.fileCounter+e.fileCounterStyle+t[o].name:t[o].name,u.filename.html(p);var c=S("<form style='display:block; position:absolute;left: 150px;' class='"+r.formGroup+"' method='"+e.method+"' action='"+e.url+"' enctype='"+e.enctype+"'></form>");c.appendTo("body");var h=[];h.push(t[o].name),w(c,a,u,h,r),r.fileCounter++}else e.showError&&S("<div class='um-error-block'>"+e.extErrorStr+"</div>").appendTo(r.errorLog)}function v(e,r,t){var o=r.allowedTypes.toLowerCase().split(","),a=t.split(".").pop().toLowerCase();return!("*"!=r.allowedTypes&&jQuery.inArray(a,o)<0)}function g(a,e){if(a.showFileCounter){var s=S(".upload-filename").length;e.fileCounter=s+1,S(".upload-filename").each(function(e,r){var t=S(this).html().split(a.fileCounterStyle),o=(parseInt(t[0]),s+a.fileCounterStyle+t[1]);S(this).html(o),s--})}}function b(e,r){return this.statusbar=S("<div class='upload-statusbar'></div>"),this.filename=S("<div class='upload-filename'></div>").appendTo(this.statusbar),this.progressDiv=S("<div class='upload-progress'>").appendTo(this.statusbar).hide(),this.progressbar=S("<div class='upload-bar "+e.formGroup+"'></div>").appendTo(this.progressDiv),this.abort=S("<div class='upload-red "+e.formGroup+"'>"+r.abortStr+"</div>").appendTo(this.statusbar).hide(),this.cancel=S("<div class='upload-red'>"+r.cancelStr+"</div>").appendTo(this.statusbar).hide(),this.done=S("<div class='upload-green'>"+r.doneStr+"</div>").appendTo(this.statusbar).hide(),this.del=S("<div class='upload-red'>"+r.deletelStr+"</div>").appendTo(this.statusbar).hide(),e.errorLog.after(this.statusbar),this}function w(i,l,n,d,u){var e={cache:!1,contentType:!1,processData:!1,forceSync:!1,data:l.formData,formData:l.fileData,dataType:l.returnType,beforeSubmit:function(e,r,t){if(0!=l.onSubmit.call(this,d)){var o=l.dynamicFormData();if(o){var a=f(o);if(a)for(var s=0;s<a.length;s++)a[s]&&(null!=l.fileData?t.formData.append(a[s][0],a[s][1]):t.data[a[s][0]]=a[s][1])}return u.tCounter+=d.length,p.afterUploadAll&&!h&&(h=!0,function e(){0!=c.sCounter&&c.sCounter+c.fCounter==c.tCounter?(p.afterUploadAll(c),h=!1):window.setTimeout(e,100)}()),!0}return n.statusbar.append("<div class='um-error-block'>"+l.uploadErrorStr+"</div>"),n.cancel.show(),i.remove(),n.cancel.click(function(){n.statusbar.remove()}),!1},beforeSend:function(e,r){n.progressDiv.show(),n.cancel.hide(),n.done.hide(),l.showAbort&&(n.abort.show(),n.abort.click(function(){e.abort(),u.selectedFiles-=d.length})),C.formdata?n.progressbar.width("1%"):n.progressbar.width("5%")},uploadProgress:function(e,r,t,o){98<o&&(o=98);var a=o+"%";1<o&&n.progressbar.width(a),l.showProgress&&(n.progressbar.html(a),n.progressbar.css("text-align","center"))},success:function(e,r,t){u.responses.push(e),n.progressbar.width("100%"),l.showProgress&&(n.progressbar.html("100%"),n.progressbar.css("text-align","center")),n.abort.hide(),l.onSuccess.call(this,d,e,t),l.showStatusAfterSuccess?(l.showDone?(n.done.show(),n.done.click(function(){n.statusbar.hide("slow"),n.statusbar.remove()})):n.done.hide(),l.showDelete?(n.del.show(),n.del.click(function(){n.statusbar.hide().remove(),l.deleteCallback&&l.deleteCallback.call(this,e,n),u.selectedFiles-=d.length,g(l,u)})):n.del.hide()):(n.statusbar.hide("slow"),n.statusbar.remove()),i.remove(),u.sCounter+=d.length},error:function(e,r,t){n.abort.hide(),"abort"==e.statusText?(n.statusbar.hide("slow").remove(),g(l,u)):(l.onError.call(this,d,r,t),l.showStatusAfterError?(n.progressDiv.hide(),n.statusbar.append("<span class='um-error-block'>ERROR: "+t+"</span>")):(n.statusbar.hide(),n.statusbar.remove()),u.selectedFiles-=d.length),i.remove(),u.fCounter+=d.length}};l.autoSubmit?i.ajaxSubmit(e):(l.showCancel&&(n.cancel.show(),n.cancel.click(function(){i.remove(),n.statusbar.remove(),u.selectedFiles-=d.length,g(l,u)})),i.ajaxForm(e))}return this}}(jQuery);