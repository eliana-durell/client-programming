// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//make sure all else is loaded

//People tabs
$('#context2 .menu .item')
    .tab({
        // special keyword works same as above
        context: 'parent'
 });

//People modal
function showModal(username) {
    var modal = $('#modal-' + username);

    //add dimmer
    var dimmer = $('<div class="ui dimmer modals page transition visible active"></div>');
    $('body').append(dimmer);

    //show modal
    modal.addClass('visible active').show();

    //close if clicking outside modal (on where its dimmed)
    dimmer.on('click', function () {
        closeModal(modal, dimmer);
    });

    modal.find('.deny.button').on('click', function () {
        closeModal(modal, dimmer);
    });
}

function closeModal(modal, dimmer) {
    modal.removeClass('visible active').hide();
    dimmer.remove();
}


//Degrees
$('.accordion').foundation();


//Employment table
$(document).ready(function () {
    $('#myTable1').DataTable({
        //get rid of automatic ordering of first column
        order: []
    });
    $('#myTable2').DataTable({
        order: []
    });
});


//Minors
//this function gets executed after DOM is loaded
$(function () {
    $(".minor_tabs").tabs({
        active: false, //close all tabs
        collapsible: true
    });
});
//on demand load course when clicked
$(document).ready(function () {
    $('.course-link').on('click', function (e) {
        e.preventDefault();
        var courseID = $(this).data('course-id');
        //had to do different variable because CourseID not unique - minors have same courses
        var targetID = $(this).data('target'); 
        var targetDiv = $('#' + targetID);
        var courseUrl = $(this).data('course-url');

        // already loaded?
        if (targetDiv.data('loaded')) {
            return; //do nothing
        }

        $.ajax({
            url: courseUrl,
            type: 'GET',
            data: { courseID: courseID },
            success: function (result) {
                var html = '<p class="class-name">' + result.title + '</p>' +
                    '<p>' + result.description + '</p>';
                targetDiv.html(html); //show new html
                targetDiv.data('loaded', true);
            },
            error: function (error) {
                console.error('Error loading course:', courseID);
                targetDiv.html('<p">Error loading course details.</p>');
            }
        });
    });
});


//Home Typewriter
// Taken from: https://css-tricks.com/snippets/css/typewriter-effect/
function setupTypewriter(t) {
    var HTML = t.innerHTML;
    t.innerHTML = "";

    var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 100,
        tempTypeSpeed = 0;

    var type = function () {
        if (writingTag === true) {
            tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = "";
                tagOpen = true;
                writingTag = true;
                tag += HTML[cursorPosition];
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
            if (HTML[cursorPosition] === " ") {
                tempTypeSpeed = 0;
            }
            else {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }

    };
    return {
        type: type
    };
}
var typer = document.getElementById('typewriter');
typewriter = setupTypewriter(typewriter);
typewriter.type();