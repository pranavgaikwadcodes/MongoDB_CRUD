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
let messageClass = document.getElementById('message');
let statusBlock = document.getElementById('status-block')

function showToast(message) {

    if(message !== 'success'){
        messageClass.style.display = "flex"
        messageClass.style.backgroundColor = 'rgb(255, 190, 190)'
        messageClass.style.color = '#fff'
        messageClass.style.borderColor = 'red'
        statusBlock.textContent = 'Some Error Occured'
        statusBlock.style.color = "red"
    }

    clearTimeout(x);
    messageClass.style.display = "flex"
    x = setTimeout(() => {
        messageClass.style.display = "none"
    },3000)
    
}

function closeToast(){
    messageClass.style.display = "none"
}



// Extras
// delete
if(window.location.pathname == "/dashboard"){
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function() {
        var id = $(this).attr('data-id')

        var request = {
            "url" : `http://localhost:3000/api/dashboard/${id}`,
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

function deleteThis(id) {
    // $ondelete = $(".table tbody td a.delete")
    // var id = $(this).attr('data-id')

    var request = {
        "url" : `http://localhost:3000/api/dashboard/${id}`,
        "method" : 'DELETE'
    }

    if(confirm("Do you want to delete this record ? ")){
        $.ajax(request).done(function(response){
            // alert('data Deleted successfully!')
            location.reload()
        })
    }
}



        // update admin
        $("#updateAdmin").submit(function(event){
            event.preventDefault();

            var unindexed_array = $(this).serializeArray()

            var data = {}
            
            $.map(unindexed_array, function(n,i){
                data[n['name']] = n['value']
            })
            
            console.log(data)
            
            var request = {
                "url" : `http://localhost:3000/api/profile/${data.id}`,
                "method" : 'PUT',
                "data" : data
            }


            $.ajax(request).done(function(response){
            })

        })