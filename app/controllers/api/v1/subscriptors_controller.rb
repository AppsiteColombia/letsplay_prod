module Api
  module V1
   class SubscriptorsController < ApplicationController
   	skip_before_filter :verify_authenticity_token
   	def create_newslatter
   		result = {}
   		
   		@subscriptor = Subscriptor.new(:mail => params[:mail], :name => " ", :subject => " ", :message => " ")
		   
	    if @subscriptor.save
	      	Welcome.notify(@subscriptor).deliver_now
	        result[:success] = true
	      	else
			result[:success] = false
		end
	    
	    render json: result.to_json
	end

	def create_contact
   		result = {}
   		@subscriptor = Subscriptor.new(:name => params[:name_contacto], :mail => params[:mail_contacto], :subject => params[:subject_contacto], :message => params[:message_contacto])
		   
	    if @subscriptor.save
	      	Welcome.contacto(@subscriptor).deliver_now
	        result[:success] = true
	      	else
			result[:success] = false
		end
	    
	    render json: result.to_json
	end

   end
  end
end