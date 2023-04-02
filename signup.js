$(document).ready(function(){
   
   
    $('#news-heading').on('click' ,function(){
        $('.news-content').toggle()
    })
    $('.news-content').find("label").css({
        display:"flex",
        padding:"5px"
    })
     $('#userName').focus(function(){
       
        var firstName=$('#firstName').val();
        var lastName=$('#lastName').val();
        if( firstName && lastName && !this.value == ""){
           this.value=firstName + "." +lastName;
        //    console.log(this.value)
        }q




        
     })
    $('#myform').validate({
       rules:{
           firstName:'required',
           lastName:"required",
           userName:"required",
           password:{
            required:true,
            minlength:"8"
           },
           confirm_password:{
            required:true,
            minlength:"8",
            equalTo:"#password"
           },
           email:{
            required:true,
            email:true
           },
           agree:"required",
           news_heading:{
            required:"#news-heading:checked",
            minlength:true
           }
       },
       messages:{
        firstName:"Please Enter your first name.",
        lastName:"Please Enter your last name.",
        userName:{
            required:"Please Enter valid user name",
            minlength:"Qouser Name must consist of atleast two character."

        },
        password:{
            required:'Please provide your password.',
            minlength:"Your password must be of at least 8 character."
        },
        confirm_password:{
            required:"please Provide a password.",
            minlength:"Your password must be of at least 8 character.",
            equalTO:"your password is not matching."
        },
        agree:"Please accept out Policy.",
        news_heading:"please select atleast two news."

       }

    });

})