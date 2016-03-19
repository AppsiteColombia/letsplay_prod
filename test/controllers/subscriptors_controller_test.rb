require 'test_helper'

class SubscriptorsControllerTest < ActionController::TestCase
  setup do
    @subscriptor = subscriptors(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:subscriptors)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create subscriptor" do
    assert_difference('Subscriptor.count') do
      post :create, subscriptor: { mail: @subscriptor.mail, name: @subscriptor.name }
    end

    assert_redirected_to subscriptor_path(assigns(:subscriptor))
  end

  test "should show subscriptor" do
    get :show, id: @subscriptor
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @subscriptor
    assert_response :success
  end

  test "should update subscriptor" do
    patch :update, id: @subscriptor, subscriptor: { mail: @subscriptor.mail, name: @subscriptor.name }
    assert_redirected_to subscriptor_path(assigns(:subscriptor))
  end

  test "should destroy subscriptor" do
    assert_difference('Subscriptor.count', -1) do
      delete :destroy, id: @subscriptor
    end

    assert_redirected_to subscriptors_path
  end
end
