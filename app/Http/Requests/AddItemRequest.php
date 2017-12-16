<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

use Auth;
use App\ResponseBuilder;

class AddItemRequest extends FormRequest
{
  /**
  * Determine if the user is authorized to make this request.
  *
  * @return bool
  */
  public function authorize()
  {
    return Auth::check();
  }

  public function response(array $errors)
  {
    return ResponseBuilder::send(false, $errors, "");
  }

  protected function failedValidation(Validator $validator)
  {
    throw new HttpResponseException(response()->json(ResponseBuilder::build(false, $validator->errors() , '')));
  }

  /**
  * Get the validation rules that apply to the request.
  *
  * @return array
  */
  public function rules()
  {
    return [
      'title' => 'required|string',
      'description' => 'required|string',
      'category' => 'required|integer',
      'price' => 'required|integer',
      'image1' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:1024',
      'image2' => 'image|mimes:jpeg,png,jpg,gif,svg|max:1024',
      'image3' => 'image|mimes:jpeg,png,jpg,gif,svg|max:1024',
      'image4' => 'image|mimes:jpeg,png,jpg,gif,svg|max:1024',
      'accept_terms' => 'accepted'
    ];
  }
}
