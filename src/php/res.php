<?php 
    //对数据进行校验
    $phone = $_GET['phone'];
    $psw1 = $_GET['password1'];
    $psw2 = $_GET['password2'];
    //php数据库操作

   $con = new mysqli('127.0.0.1','root','','luxury'); 

    //判断当前的手机号码是否已经注册

    //1获取当前所有的用户信息
    $sql = 'select * from user';
    $res = $con->query($sql);

    //2 获取的用户信息与当前注册信息进行
    $bool = true;
    //数据库查询结果的长度 $res->num_rows
    if($res->num_rows>0){
        while ($row = $res->fetch_assoc()) {
            //判断用户是否注册
            if($row['phone'] == $phone){
                $bool = false; //表示用户已注册
            }
        }
    }
    //通过判断注册的bool 去插入当前的注册用户的信息
    if($bool){
        //注册用户的sql语句
        $sql = "insert into user (phone,password1,password2) values('$phone','$psw1','$psw2')";
        if($con->query($sql)){
             echo "注册成功";
        }else{
            echo $con->error;
            echo "注册失败";
        }
    }else{
        echo '用户已注册';
    }

    //关闭数据库
    $con->close();
 ?>
