# encoding: UTF-8

# This file contains data derived from the IANA Time Zone Database
# (http://www.iana.org/time-zones).

module TZInfo
  module Data
    module Definitions
      module Etc
        module GMT__m__5
          include TimezoneDefinition
          
          timezone 'Etc/GMT-5' do |tz|
            tz.offset :o0, 18000, 0, :'GMT-5'
            
          end
        end
      end
    end
  end
end
