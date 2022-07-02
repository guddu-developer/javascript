<?php
//////FILE UPLOAD CONFIRM
/////for ajax file uploads
if($_FILES['aud']['name']){
$fileName =$_FILES['aud']['name'];
$fileTmpName  = $_FILES['aud']['tmp_name'];
$uploadPath =move_uploaded_file($fileTmpName,"upload/".$fileName) ;
    if($uploadPath){
        echo "success";
    }
}
else{
    echo "NOT UPLOADED";
}
    ?>
