<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Websites</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            gap: 20px;
        }
        .site-button {
            width: 300px;
            height: 150px;
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 24px;
            font-weight: bold;
            color: white;
            border-radius: 10px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
            opacity: 0;
            transform: translateY(20px);
        }
        .site-button:hover {
            transform: scale(1.1);
            box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
            filter: brightness(1.2);
        }
    </style>
</head>
<body>

    <div class="container">
        <a href="#" class="site-button" style="background-image: url('image1.jpg');">Website 1</a>
        <a href="#" class="site-button" style="background-image: url('image2.jpg');">Website 2</a>
        <a href="#" class="site-button" style="background-image: url('image3.jpg');">Website 3</a>
    </div>

    <script>
        // Smooth fade-in animation when page loads
        document.addEventListener("DOMContentLoaded", () => {
            const buttons = document.querySelectorAll(".site-button");
            buttons.forEach((btn, index) => {
                setTimeout(() => {
                    btn.style.opacity = "1";
                    btn.style.transform = "translateY(0)";
                }, index * 200); // Staggered animation effect
            });
        });

        // Bounce effect when hovered
        document.querySelectorAll(".site-button").forEach(button => {
            button.addEventListener("mouseover", () => {
                button.style.transform = "scale(1.15)";
            });

            button.addEventListener("mouseleave", () => {
                button.style.transform = "scale(1)";
            });
        });
    </script>

</body>
</html>
