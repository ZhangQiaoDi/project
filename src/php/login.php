<?php 
    //数据校验
    //获取当前的用户名和密码
    $phone = $_GET['phone'];
    $password = $_GET['password'];

    $con = new mysqli('127.0.0.1','root','','luxury'); 

    //1获取数据的用户信息
 //   $sql = 'select * from user where phone='.$ph.'and password1='.$pa.'';
    //$sql ="select * from user where phone='$ph'and password1='$pa'";
    $sql = 'select * from user where phone="'.$phone.'"and password1="'.$password.'"';

    $res = $con->query($sql);

    //2 判断当前登录的用户是否已注册

    if($res->num_rows>0){
         echo "<script>alert('登录成功');window.location.href='http://localhost/1612/project1612/src/index/index.html';</script>";                   
                  
    }else{
        echo "<script>alert('登录失败');</script>";
    } 
    $con->close();    
 ?>