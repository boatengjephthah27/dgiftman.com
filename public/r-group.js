// let noOfChar = 9;
// let contents = document.querySelectorAll(".abstract");
// contents.forEach(contents => {
//     // if test is less than the noOfChar then hide the read more button
//     if(contents.textContent.length < noOfChar){
//         contents.nextElementSibling.getElementsByClassName.display = "none";
//     }
//     else{
//         let displatText = contents.textContent.slice(0,noOfChar);
//         let moreText = contents.textContent.slice(noOfChar);
//         contents.innerHTML = '${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>'
//     }

// });

// function readMore(btn){
//     let post = btn.parentElement;
//     post.querySelector(".dots").classList.toggle("hide");
//     post.querySelector(".more").classList.toggle("hide");
//     btn.textContent == "Read More" ? btn.textContent = "Read less" : btn.textContent = "Read More"
// }


// $(document).ready(function(){
//     $(".abstract").hide();
//     $(document).on('click', ".rmb", function(){
//         var mlB = $(".abstract").is("visible")?'Read More':'Read Less';
//         $(this).text(mlB);
//         $(this).parent(".projects").find(".abstract").toggle();
//         $(this).parent(".projects").find(".visible").toggle();
//     });
// });



{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> 

<script type="text/javascript">
    $(document).ready(function(){
        $(".abstract").hide();
        $(document).on('click', ".rmb", function(){
            var mlB = $(".abstract").is("visible")?'Read More':'Read Less';
            $(this).text(mlB);
            $(this).parent(".projects").find(".abstract").toggle();
            $(this).parent(".projects").find(".visible").toggle();
        });
    });
</script> */}



const parentContainer = document.querySelector('.p-details');
parentContainer.addEventListener('click', event=>{
    const current = event.target;

    const isRMB = current.className.includes('rmb');

    if(!isRMB) return;

    const currentText = event.target.parentNode.querySelector('.abstract');

    currentText.classList.toggle('.abstract--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})