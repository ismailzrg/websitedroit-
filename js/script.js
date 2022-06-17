window.onload = myfunction()
function myfunction()
{
    const path = window.location.pathname.split("/");

    switch(path[1])
    {
        case "":
        {
            loadPage("index");
         
            break;
        }
        case "accueile":
        {
            loadPage("accueile");
            break;
        }
        case "faculte":
        {
            loadPage("faculte");
            break;
        }
        case "niveaux":
        {
            loadPage("niveaux");
            break;
        }
        case "recherche":
        {
            loadPage("recherche");
            break;
        }
        case "bibliotheque":
        {
            loadPage("bibliotheque");
            break;
        }
        default:
        {
            loadPage("index");
            break;
        }
    }

    document.querySelectorAll(".menu__item").forEach((item) =>
    {
        item.addEventListener("click", function()
        {
            const path = item.getAttribute("value");
            loadPage(path);
            if(path == "accueile")
            {
                window.history.pushState("", "", "/");
                return;
            }

            window.history.pushState("", "", path);
        });
    });

     function loadPage($path)
    {
        if($path == "") return;

        const container = document.getElementById("container");

        const request = new XMLHttpRequest();
        request.open("GET", "public/" + $path + ".html");
        request.send();
        request.onload = function myfunction()
        {
            if(request.status == 200)
            {
                container.innerHTML = request.responseText;
                document.title = $path;
            }
        }
    }
}