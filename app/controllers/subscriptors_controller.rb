class SubscriptorsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  before_action :set_subscriptor, only: [:show, :edit, :update, :destroy]
 
  # GET /subscriptors
  # GET /subscriptors.json
  def index
   # @subscriptors = Subscriptor.all
     @subscriptor = Subscriptor.new
  end

  # GET /subscriptors/1
  # GET /subscriptors/1.json
  def show
  end

  # GET /subscriptors/new
  def new
    @subscriptor = Subscriptor.new
  end

  # GET /subscriptors/1/edit
  def edit
  end

  # POST /subscriptors
  # POST /subscriptors.json
  # ya no se utiliza porque estoy utilizando la api/v1/subscriptors_controller.rb
  # def create
    
  #   @subscriptor = Subscriptor.new(subscriptor_params)

  #   respond_to do |format|
  #     if @subscriptor.save
         
  #       if  subscriptor_params[:name].blank?
  #         #Welcome.notify(@subscriptor).deliver_now
  #       else
  #         #Welcome.contacto(@subscriptor).deliver_now
  #       end 
  #       format.js 
  #       format.html { render :index }
  #       format.json { render json: @subscriptor.errors, status: :unprocessable_entity }
  #     else
  #       format.html { render :new }
  #       format.json { render json: @subscriptor.errors, status: :unprocessable_entity }
  #       format.js 
  #     end
  #   end
  # end

  # PATCH/PUT /subscriptors/1
  # PATCH/PUT /subscriptors/1.json
  def update
    respond_to do |format|
      if @subscriptor.update(subscriptor_params)
        format.html { redirect_to @subscriptor, notice: 'Subscriptor was successfully updated.' }
        format.json { render :show, status: :ok, location: @subscriptor }
      else
        format.html { render :edit }
        format.json { render json: @subscriptor.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /subscriptors/1
  # DELETE /subscriptors/1.json
  def destroy
    @subscriptor.destroy
    respond_to do |format|
      format.html { redirect_to subscriptors_url, notice: 'Subscriptor was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_subscriptor
      @subscriptor = Subscriptor.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def subscriptor_params
      params.require(:subscriptor).permit(:name, :subject, :mail, :message)
    end
end
