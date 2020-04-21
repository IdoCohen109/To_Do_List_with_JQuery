function createNewTaskElement(content = "", isComplete = false) {
    const newTask = $("<div></div>", {
        class: "task ui-widget-content"
    }).append(
        $(
            `<input type="checkbox" class="is-complete" ${
                isComplete ? "checked" : ""
            }/>`
        )
    );

    $("<div>").addClass("task-content").attr("contenteditable", true).html(content).appendTo(newTask);

    return newTask;
}

function addTask() {
    const newTask = createNewTaskElement();
    $("#tasks-container").prepend(newTask);
    newTask.find(".task-content").focus();
}

function removeTask(element) {
    console.log(element);
    $element = $(element);
    if ($element.is(":checked")) {
        $element.parent().toggleClass("red");
        $element.parent().toggle("slow");
    }

}

$(document).keyup(function (event) {
    if (event.keyCode == 13) {
        $(".plus-icon").click();
    }
});


function init() {
    $(".add-task-container").click(addTask);

    $("#tasks-container").on("change", "input.is-complete:checkbox", function () {
        removeTask(this);
    });
    $("#tasks-container").sortable();
    $("#tasks-container").draggable();
}

$(init);