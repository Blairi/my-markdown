<?php

namespace App\Http\Controllers;

use App\Models\Markdown;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Laravel\Sanctum\PersonalAccessToken;

class MarkdownController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        //
        $user = User::find($id);

        if( !$user ){
            return response()->json([
                'status' => false,
                'message' => 'user not found',
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            'status' => true,
            'message' => 'markdown list',
            'markdowns' => $user->markdowns->makeHidden(['user_id'])
        ], Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $validator = Validator::make($request->all(),[
            'title' => 'required|min:3|max:30',
            'markdown' => 'required'
        ]);

        $accessToken = $request->bearerToken();
        $token = PersonalAccessToken::findToken($accessToken);

        if( !$token ){
            return response()->json([
                'status' => false,
                'message' => 'invalid bearer token',
            ], Response::HTTP_BAD_REQUEST);
        }

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid Inputs',
                'error' => $validator->errors()
            ], Response::HTTP_BAD_REQUEST);
        }

        $markdown = new Markdown();
        $markdown->title = $request->title;
        $markdown->markdown = $request->markdown;
        $markdown->user_id = $token->tokenable_id; // user id

        $markdown->save();

        return response()->json([
            'status' => true,
            'message' => 'Markdown successfully created',
            'markdown' => $markdown,
        ], Response::HTTP_CREATED);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $markdown = Markdown::find($id);

        if( !$markdown ){
            return response()->json([
                'status' => false,
                'message' => 'markdown not found',
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json([
            'status' => true,
            'message' => 'markdown found',
            'markdown' => $markdown->makeHidden(['user', 'user_id']),
            'author' => $markdown->user->makeHidden(['email_verified_at', 'id', 'created_at', 'updated_at'])
        ], Response::HTTP_CREATED);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $accessToken = $request->bearerToken();

        $token = PersonalAccessToken::findToken($accessToken);

        if( !$token ){
            return response()->json([
                'status' => false,
                'message' => 'invalid bearer token',
            ], Response::HTTP_BAD_REQUEST);
        }

        $userId = $token->tokenable_id;
        
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:3|max:30',
            'markdown' => 'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => false,
                'message' => 'Invalid Inputs',
                'error' => $validator->errors()
            ], Response::HTTP_BAD_REQUEST);      
        }

        $markdown = Markdown::find( $id );

        if( !$markdown ){
            return response()->json([
                'status' => false,
                'message' => 'markdown not found',
            ], Response::HTTP_NOT_FOUND);
        }

        if( $markdown->user_id !== $userId ){
            return response()->json([
                'status' => false,
                'message' => 'invalid token',
            ], Response::HTTP_UNAUTHORIZED); 
        }

        $markdown->title = $request->title;
        $markdown->markdown = $request->markdown;
        $markdown->user_id = $userId;

        $markdown->save();

        return response()->json([
            "status" => true,
            "message" => "markdown updated successfully.",
            "markdown" => $markdown
        ], Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        //
        $accessToken = $request->bearerToken();

        $token = PersonalAccessToken::findToken($accessToken);

        if( !$token ){
            return response()->json([
                'status' => false,
                'message' => 'invalid bearer token',
            ], Response::HTTP_BAD_REQUEST);
        }

        $markdown = Markdown::find( $id );

        if( !$markdown ){
            return response()->json([
                'status' => false,
                'message' => 'markdown not found',
            ], Response::HTTP_NOT_FOUND);
        }

        if( $markdown->user_id !== $token->tokenable_id ){
            return response()->json([
                'status' => false,
                'message' => 'invalid token',
            ], Response::HTTP_UNAUTHORIZED); 
        }

        $markdown->delete();

        return response()->json([
            "status" => true,
            "message" => "markdown deleted successfully.",
            "markdown" => $markdown
        ], Response::HTTP_OK);
    }
}
