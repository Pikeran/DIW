<header>

    <?php
        if(isset($_SESSION["usuario"])){
                require("../view/header_user.html");
            }else{
                require("../view/header_public.html");
            }
    ?>
    
</header>
