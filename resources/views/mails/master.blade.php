<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>@yield('title')</title>
  <link rel="stylesheet" type="text/css" href="https://bootswatch.com/3/paper/bootstrap.min.css">
</head>
<body>
  <div class="navbar navbar-inverse navbar-static-top">
    <div class="container">
      <a class="navbar-brand" href="{{ url('/') }}">{{ config('app.name') }}</a>
    </div>
  </div>
  <div class="container">
    @yield('content')
  </div>
  <footer class="footer_wrapper navbar-inverse modal-footer">
    <div class="container">
      <p class="navbar-text pull-left">Copyright @ Eshop</p>
    </div>
  </footer>
</body>
</html>
