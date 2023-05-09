<!DOCTYPE html>
<html lang="fr">
    <head>
        <?php include 'layout/head.phtml'; ?>
    </head>

    <body>

    <header>
            <?php include 'layout/header.phtml'; ?>
    </header>

    <main>
        <div class="container">
            <div class="row">
                <div class="offset-lg-2 col-lg-8">
                    <div id="weather-container">
                        <h2 id="town-name"></h2>
                        <div class="weather-content">
                            <div id="clouds-container">

                            </div>
                            <div id="temperature-container">
                                
                            </div>
                            <div id="infos-container">
                                <div id="wind-content">

                                </div>
                                <div id="precip-content">
                                    
                                </div>
                                <div id="pressure-content">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer>
        <?php include 'layout/footer.phtml'; ?>
    </footer>

    <script type="text/javascript" src="scripts/main.js"></script>
    </body>