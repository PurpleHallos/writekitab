class AddUiLanguageToAccounts < ActiveRecord::Migration[8.2]
  def change
    add_column :accounts, :ui_language, :string, default: "en", null: false
  end
end
