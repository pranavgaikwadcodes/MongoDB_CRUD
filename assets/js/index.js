$("#add_user").submit(function(event){
    // alert("Data Inserted Successfully")
    event.preventDefault()

    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    
    /* start ajax submission process */
    $.ajax({
        url: formURL,
        type: "POST",
        data: postData,
        success: function() {
            showToast('success')
        },
        error: function(jqXHR, textStatus, errorThrown) {
            showToast('error')
        }
    
    });

    // showToast()
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray()

    var data = {}
    
    $.map(unindexed_array, function(n,i){
        data[n['name']] = n['value']
    })
    
    console.log(data)
    
    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : 'PUT',
        "data" : data
    }

    $.ajax(request).done(function(response){
        // alert('data Updated successfully!')
        showToast('success')
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function() {
        var id = $(this).attr('data-id')

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : 'DELETE'
        }

        if(confirm("Do you want to delete this record ? ")){
            $.ajax(request).done(function(response){
                // alert('data Deleted successfully!')
                location.reload()
            })
        }
    })
}

// js for toast message

let x;
let toast = document.getElementById('toast');
let toastWrap = document.getElementById('toast-wrap');

let iconBlock = document.getElementById('icon-block')
let messageBlock = document.getElementById('message-block')
let statusBlock = document.getElementById('status-block')

function showToast(message) {

    if(message !== 'success'){
        iconBlock.classList.replace("fa-circle-check","fa-circle-xmark")
        iconBlock.style.color = "red"
        statusBlock.textContent = 'Error'
        statusBlock.style.color = "red"
        messageBlock.textContent = 'Something went wrong! Try again.'
        toast.style.borderLeft = "8px solid red"
    }

    clearTimeout(x);
    toastWrap.style.display = "block"
    // toast.style.transform = "translateX(0)";
    x = setTimeout(() => {
        // toast.style.transform = "translateX(420px)";
        toastWrap.style.display = "none"
        // location.reload()
    },3000)
    
}

function closeToast(){
    // toast.style.transform = "translateX(420px)";
    toastWrap.style.display = "none"
}
