class HomeController < ApplicationController
  def index
  	@subscriptor = Subscriptor.new
  end
  def show
  end
end
