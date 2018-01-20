<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>@yield('title')</title>
  {{-- @include('mails.style-default') --}}
  @include('mails.style')
</head>
<body>
  <div id="wrapper">
    <div id="header" class="navbar navbar-inverse navbar-static-top">
      <div class="container">
        <a class="navbar-brand" href="{{ url('/') }}">{{ config('app.name') }}</a>
      </div>
    </div>
    <div id="content">
      <div class="container">
        @yield('content')
      </div>
    </div>
    <footer id="footer">
      <div class="container">
        <p>Copyright @ Eshop</p>
      </div>
    </footer>
  </div>
</body>
</html>
