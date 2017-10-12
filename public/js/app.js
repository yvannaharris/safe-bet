var indexTemplateScript = $("#index-template").html();

var iTemplate = Handlebars.compile(indexTemplateScript);

var data = 

$(document.body).append(iTemplate(data));

var signInTemplateScript = $("#sign-in-template").html();

var sTemplate = Handlebars.compile(signInTemplateScript);

var data = 

$(document.body).append(sTemplate(data));