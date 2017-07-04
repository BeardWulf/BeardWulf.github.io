function Skill(name, power) {
    this.name = name;
    this.power = power;
}

var programmingskills = [new Skill("Java", 100), new Skill("C++", 50),
    new Skill("C#", 30), new Skill("C", 30), new Skill("VB.net", 30)];
var webdesignskills = [new Skill("Html", 85), new Skill("CSS", 80), new Skill("PHP", 50)];

function skillmaken() {
    $.each(programmingskills, function(index, skill) {
        var $skillcontainer = $("<div>").addClass("skillcontainer");
        $("#programskills").append($("<p>").text(skill.name + " - " + skill.power + "%"));
        var $skill = $("<div>").addClass("skill");
        $skillcontainer.append($skill);
        $("#programskills").append($skillcontainer);
        $(".skill:last").animate({
            width: skill.power + "%"
        }, 2000);
    });

    $.each(webdesignskills, function(index, skill) {
        var $skillcontainer = $("<div>").addClass("skillcontainer");
        $("#webdesignskills").append($("<p>").text(skill.name + " - " + skill.power + "%"));
        var $skill = $("<div>").addClass("skill");
        $skillcontainer.append($skill);
        $("#webdesignskills").append($skillcontainer);
        $(".skill:last").animate({
            width: skill.power + "%"
        }, 2000);
    });
}

function breedteToepassen() {
    var breedte = $("#background").width() -$(window).width();
    console.log(breedte);
    $("#background").css("left", -breedte/2) + "px";
    var breedte2 = $(window).width() - $("nav").width();
    $("nav").css("left", breedte2/2 + "px");
    $("#navBackground").css("left", breedte2/2 + "px");
}



$(document).ready(function () {
    $(".nav").click(function () {
        schuiven();
    });
    $(".smoothscroll").click(function() {
        schuiven();
    });
    $("#background").on("contextmenu",function(e){
        return false;
    });
    breedteToepassen();


    skillmaken();
});
$(window).resize(function() {
    breedteToepassen();
    });

$(window).bind("load", function() {
    $("#loading").fadeOut(1000);
});