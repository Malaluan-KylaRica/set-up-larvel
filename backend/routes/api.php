<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//get all emp
Route::get('employees', [EmployeeController::class, 'getEmployee']);

//get specific employee
Route::get('employee/{id}', [EmployeeController::class, 'getEmployeeByID']);

//add 
Route::post('addEmployee', [EmployeeController::class, 'addEmployee']);

//update
Route::put('updateEmployee/{id}', [EmployeeController::class, 'updateEmployee']);

//delete
Route::delete('deleteEmployee/{id}', [EmployeeController::class, 'deleteEmployee']);