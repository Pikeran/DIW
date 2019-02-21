<header>

    <?php



        if(empty($_SESSION)){
                
                require_once("view/header_public.php");   
     
            }else{
                require_once("view/header_user.php");
                
            }
    ?>
    
</header>
