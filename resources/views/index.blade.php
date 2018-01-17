<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>{{config('app.name')}}</title>
  {{-- <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" /> --}}
  <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
</head>
<body>
  <div id="app"></div>
  <footer class="footer">
    <div class="container">
      <nav class="pull-left">
        <ul>
          <li data-to="/help"><a>Help</a></li>
          <li data-to="/about"><a>About</a></li>
          <li data-to="/terms-of-service"><a>Terms of Service</a></li>
        </ul>
      </nav>
      <div class="copyright pull-right">
        &copy; 2018, made with <i class="fa fa-heart heart"></i>
      </div>
    </div>
  </footer>
  <script src="{{asset('js/app.js')}}" ></script>
</body>
</html>
