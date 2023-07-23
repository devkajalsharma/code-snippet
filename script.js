<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        let runagain = true;

        while (runagain) {
            let age = prompt("Enter your age");
            age = Number.parseInt(age);


            const candrive = (age) => {
                return age >= 18 ? true : false
            }
            if (age < 0) {
                console.error("enter a valid age");
                break;
            }
            

            if (candrive(age)) {
                alert("you can drive.");
            }
            else {
                alert("you can't drive.");
            }

            runagain = confirm("do you want to see again")

        }




    </script>
</body>

</html>
